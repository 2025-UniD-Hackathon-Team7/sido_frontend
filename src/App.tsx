import { useState, useEffect } from 'react';
import { SplashScreen } from './components/SplashScreen';
import { LoginScreen } from './components/LoginScreen';
import { OnboardingScreen } from './components/OnboardingScreen';
import { HomeScreen } from './components/HomeScreen';
import { NewProfileScreen } from './components/NewProfileScreen';
import { NewMyFieldScreen } from './components/NewMyFieldScreen';
import { NewDonationScreen } from './components/NewDonationScreen';
import { DonatedTreesScreen } from './components/DonatedTreesScreen';
import { ProfileScreen } from './components/ProfileScreen';
import { RecordScreen, ActivityRecord } from './components/RecordScreen';
import { MissionCompleteModal } from './components/MissionCompleteModal';
import { MissionSurveyScreen, SurveyData } from './components/MissionSurveyScreen';
import { MissionRecommendationScreen } from './components/MissionRecommendationScreen';
import { MissionDetailScreen } from './components/MissionDetailScreen';
import { TreeSelectionModal, TreeType } from './components/TreeSelectionModal';
import { RankingScreen } from './components/RankingScreen';
import { BottomNav } from './components/BottomNav';
import { DonationCompleteModal } from './components/DonationCompleteModal';
import { getAccessToken, getUser, updateUser, completeMission as completeMissionAPI, donateTree as donateTreeAPI } from './utils/supabase/client';
import { Toaster } from './components/ui/sonner';

type Screen = 'splash' | 'login' | 'onboarding' | 'home' | 'myfield' | 'donation' | 'record' | 'profile' | 'survey' | 'recommendations' | 'missionDetail' | 'ranking' | 'donatedTrees';

interface Mission {
  id: string;
  title: string;
  reward: number;
  emoji: string;
  description: string;
  completed: boolean;
  xp?: number;
  difficulty?: 'easy' | 'medium' | 'hard';
  timeOfDay?: 'morning' | 'afternoon' | 'evening';
  category?: string;
}

interface DonatedTree {
  id: string;
  treeType: TreeType;
  donatedDate: string;
  seeds: number;
}

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('splash');
  const [completedMission, setCompletedMission] = useState<Mission | null>(null);
  const [surveyData, setSurveyData] = useState<SurveyData | null>(null);
  const [myMissions, setMyMissions] = useState<Mission[]>([]);
  const [selectedMissionForDetail, setSelectedMissionForDetail] = useState<Mission | null>(null);
  const [missionDetailSource, setMissionDetailSource] = useState<'home' | 'recommendations'>('recommendations');
  const [screenHistory, setScreenHistory] = useState<Screen[]>([]);
  
  // Tree and progress states
  const [currentTree, setCurrentTree] = useState<TreeType | null>(null);
  const [seeds, setSeeds] = useState(0);
  const [donatedTrees, setDonatedTrees] = useState<DonatedTree[]>([]);
  const [showTreeSelection, setShowTreeSelection] = useState(false);
  const [activityHistory, setActivityHistory] = useState<ActivityRecord[]>([]);
  const [level, setLevel] = useState(1);
  const [xp, setXP] = useState(0);
  const [showDonationCompleteModal, setShowDonationCompleteModal] = useState(false);
  const [lastDonation, setLastDonation] = useState<{ tree: TreeType; organizationId: string; seeds: number } | null>(null);
  const [selectedDonatedTree, setSelectedDonatedTree] = useState<DonatedTree | null>(null);
  
  // User data
  const [userId, setUserId] = useState<string | null>(null);
  const [userNickname, setUserNickname] = useState<string>('');

  // Check for existing session on mount
  useEffect(() => {
    const checkSession = async () => {
      console.log('[APP] Checking for existing session...');
      const token = getAccessToken();
      console.log('[APP] Existing token found:', token ? 'YES' : 'NO');
      
      if (token) {
        try {
          console.log('[APP] Attempting to fetch user data...');
          const userData = await getUser();
          console.log('[APP] User data loaded successfully:', userData);
          loadUserData(userData);
          setCurrentScreen('home');
        } catch (error) {
          console.error('[APP] Failed to load user data:', error);
          // Clear invalid token
          console.log('[APP] Clearing invalid token and redirecting to login');
          localStorage.removeItem('sido_access_token');
          setCurrentScreen('login');
        }
      } else {
        console.log('[APP] No token found, will show login after splash');
      }
    };
    checkSession();
  }, []);

  // Auto-navigate from splash after a moment
  useEffect(() => {
    if (currentScreen === 'splash') {
      const timer = setTimeout(() => {
        const token = getAccessToken();
        setCurrentScreen(token ? 'home' : 'login');
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [currentScreen]);

  // Load user data from server response
  const loadUserData = (userData: any) => {
    setUserId(userData.id);
    setUserNickname(userData.nickname);
    setSeeds(userData.seeds || 0);
    setCurrentTree(userData.currentTree || null);
    setDonatedTrees(userData.donatedTrees || []);
    setActivityHistory(userData.activityHistory || []);
    setLevel(userData.level || 1);
    setXP(userData.xp || 0);
    
    // Load "my missions" - these are missions that aren't completed yet
    // For now, we'll just keep them in local state as they're generated per session
  };

  const handleSplashComplete = () => {
    setCurrentScreen('login');
  };

  const handleLogin = (userData: any) => {
    loadUserData(userData);
    setCurrentScreen('onboarding');
  };

  const handleOnboardingComplete = () => {
    setCurrentScreen('home');
  };

  const handleNavigate = (screen: string) => {
    setScreenHistory([...screenHistory, currentScreen]);
    setCurrentScreen(screen as Screen);
  };

  const handleBack = () => {
    if (screenHistory.length > 0) {
      const previousScreen = screenHistory[screenHistory.length - 1];
      setScreenHistory(screenHistory.slice(0, -1));
      setCurrentScreen(previousScreen);
    }
  };

  const handleMissionComplete = async (mission: Mission) => {
    // Remove completed mission from list immediately
    setMyMissions(myMissions.filter(m => m.id !== mission.id));
    
    // Add seeds locally first for immediate feedback
    setSeeds(seeds + mission.reward);
    
    // Add to activity history
    const newActivity: ActivityRecord = {
      id: Date.now().toString(),
      type: 'mission',
      title: mission.title,
      date: new Date().toISOString().split('T')[0],
      time: new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' }),
      seeds: mission.reward,
      emoji: mission.emoji,
    };
    setActivityHistory([newActivity, ...activityHistory]);
    
    setCompletedMission(mission);

    // Sync with server
    try {
      await completeMissionAPI(mission.id, mission.reward, newActivity);
    } catch (error) {
      console.error('Failed to sync mission completion:', error);
    }
  };

  const handleModalClose = () => {
    setCompletedMission(null);
  };

  const handleCreateMission = () => {
    setCurrentScreen('survey');
  };

  const handleSurveyComplete = (data: SurveyData) => {
    setSurveyData(data);
    setCurrentScreen('recommendations');
  };

  const handleMissionsSelected = (selectedMissions: Mission[]) => {
    // Add selected missions to myMissions
    const newMissions = selectedMissions.map(m => ({ ...m, completed: false }));
    setMyMissions([...myMissions, ...newMissions]);
    setCurrentScreen('home');
  };

  const handleViewMissionDetail = (mission: Mission) => {
    setSelectedMissionForDetail(mission);
    setMissionDetailSource(currentScreen === 'home' ? 'home' : 'recommendations');
    setCurrentScreen('missionDetail');
  };

  const handleAddMissionFromDetail = () => {
    if (selectedMissionForDetail) {
      const newMission = { ...selectedMissionForDetail, completed: false };
      setMyMissions([...myMissions, newMission]);
      setSelectedMissionForDetail(null);
      setCurrentScreen('recommendations');
    }
  };

  const handleCompleteMissionFromDetail = () => {
    if (selectedMissionForDetail) {
      handleMissionComplete(selectedMissionForDetail);
      setSelectedMissionForDetail(null);
      setCurrentScreen('home');
    }
  };

  const handleAbandonMissionFromDetail = (missionId: string) => {
    handleAbandonMission(missionId);
    setSelectedMissionForDetail(null);
    setCurrentScreen('home');
  };

  const handleAbandonMission = (missionId: string) => {
    const abandonedMission = myMissions.find(m => m.id === missionId);
    if (abandonedMission) {
      // Add to activity history
      const newActivity: ActivityRecord = {
        id: Date.now().toString(),
        type: 'abandon',
        title: abandonedMission.title,
        date: new Date().toISOString().split('T')[0],
        time: new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' }),
        seeds: 0,
        emoji: abandonedMission.emoji,
      };
      setActivityHistory([newActivity, ...activityHistory]);
    }
    setMyMissions(myMissions.filter(m => m.id !== missionId));
  };

  const handlePlantTree = () => {
    setShowTreeSelection(true);
  };

  const handleTreeSelect = async (tree: TreeType) => {
    setCurrentTree(tree);
    setSeeds(0); // Reset seeds for new tree
    setShowTreeSelection(false);

    // Sync with server
    try {
      await updateUser({ currentTree: tree, seeds: 0 });
    } catch (error) {
      console.error('Failed to sync tree selection:', error);
    }
  };

  const handleDonateTree = () => {
    if (currentTree && seeds >= currentTree.requiredSeeds) {
      // Navigate to donation screen first
      setCurrentScreen('donation');
    }
  };

  const handleSelectDonation = async (organizationId: string) => {
    if (currentTree && seeds >= currentTree.requiredSeeds) {
      // Store donation info for the modal
      setLastDonation({
        tree: currentTree,
        organizationId,
        seeds
      });

      // Create donated tree
      const donatedTree: DonatedTree = {
        id: Date.now().toString(),
        treeType: currentTree,
        donatedDate: new Date().toISOString().split('T')[0],
        seeds: seeds,
      };
      
      setDonatedTrees([...donatedTrees, donatedTree]);
      
      // Add to activity history
      const newActivity: ActivityRecord = {
        id: Date.now().toString(),
        type: 'donation',
        title: `${currentTree.name} 기부`,
        date: donatedTree.donatedDate,
        time: new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' }),
        seeds: -seeds,
        location: currentTree.description,
        emoji: currentTree.emoji,
      };
      setActivityHistory([newActivity, ...activityHistory]);
      
      // Reset for new tree
      const oldTree = currentTree;
      const oldSeeds = seeds;
      setCurrentTree(null);
      setSeeds(0);
      
      // Show donation complete modal
      setShowDonationCompleteModal(true);

      // Sync with server
      try {
        await donateTreeAPI(oldTree, organizationId, oldSeeds);
      } catch (error) {
        console.error('Failed to sync donation:', error);
      }
    }
  };

  const handleCloseDonationModal = () => {
    setShowDonationCompleteModal(false);
    setLastDonation(null);
    setCurrentScreen('home');
  };

  const handleDonatedTreeClick = (tree: DonatedTree) => {
    setSelectedDonatedTree(tree);
  };

  const handleCloseDonatedTreeModal = () => {
    setSelectedDonatedTree(null);
  };

  // Get organization name from ID
  const getOrganizationName = (id: string): string => {
    const orgNames: Record<string, string> = {
      unicef: '유니세프',
      greenshield: '초록우산',
      goodneighbors: '굿네이버스',
      greenpeace: '그린피스',
    };
    return orgNames[id] || '기부 단체';
  };

  const showBottomNav = ['home', 'myfield', 'record', 'profile'].includes(currentScreen);
  
  // Check if tree is ready to donate
  const pendingTree = currentTree && seeds >= currentTree.requiredSeeds 
    ? { treeType: currentTree, seeds } 
    : null;

  return (
    <div className="relative max-w-lg mx-auto bg-white min-h-screen shadow-2xl">
      {/* Screens */}
      {currentScreen === 'splash' && (
        <SplashScreen onComplete={handleSplashComplete} />
      )}
      
      {currentScreen === 'login' && (
        <LoginScreen onLogin={handleLogin} />
      )}
      
      {currentScreen === 'onboarding' && (
        <OnboardingScreen onComplete={handleOnboardingComplete} />
      )}
      
      {currentScreen === 'home' && (
        <HomeScreen 
          onNavigate={handleNavigate}
          onMissionComplete={handleMissionComplete}
          onCreateMission={handleCreateMission}
          myMissions={myMissions}
          onAbandonMission={handleAbandonMission}
          currentTree={currentTree}
          seeds={seeds}
          onPlantTree={handlePlantTree}
          level={level}
          onViewMissionDetail={handleViewMissionDetail}
        />
      )}

      {currentScreen === 'survey' && (
        <MissionSurveyScreen
          onComplete={handleSurveyComplete}
          onBack={() => setCurrentScreen('home')}
        />
      )}

      {currentScreen === 'recommendations' && surveyData && (
        <MissionRecommendationScreen
          surveyData={surveyData}
          onComplete={handleMissionsSelected}
          onBack={() => setCurrentScreen('home')}
          onViewDetail={handleViewMissionDetail}
        />
      )}

      {currentScreen === 'missionDetail' && selectedMissionForDetail && (
        <MissionDetailScreen
          mission={selectedMissionForDetail}
          onBack={() => setCurrentScreen(missionDetailSource)}
          onAddMission={missionDetailSource === 'recommendations' ? handleAddMissionFromDetail : undefined}
          onComplete={missionDetailSource === 'home' ? handleCompleteMissionFromDetail : undefined}
          onAbandon={missionDetailSource === 'home' ? handleAbandonMissionFromDetail : undefined}
        />
      )}
      
      {currentScreen === 'myfield' && (
        <NewMyFieldScreen 
          onBack={() => handleNavigate('home')}
          donatedTrees={donatedTrees}
          currentTree={currentTree}
          seeds={seeds}
          onDonateClick={handleDonateTree}
          onViewDonatedTrees={() => handleNavigate('donatedTrees')}
        />
      )}
      
      {currentScreen === 'donation' && (
        <NewDonationScreen 
          onBack={() => setCurrentScreen('myfield')} 
          onSelectDonation={handleSelectDonation}
          currentTreeSeeds={seeds}
        />
      )}

      {currentScreen === 'record' && (
        <RecordScreen 
          onBack={() => handleNavigate('home')}
          activityHistory={activityHistory}
        />
      )}
      
      {currentScreen === 'profile' && (
        <NewProfileScreen 
          onNavigate={handleNavigate}
          seeds={seeds}
          level={level}
          xp={xp}
          completedMissionsCount={activityHistory.filter(a => a.type === 'mission').length}
          donatedTreesCount={donatedTrees.length}
          currentMonthSeeds={activityHistory
            .filter(a => a.type === 'mission')
            .reduce((sum, a) => sum + (a.seeds || 0), 0)}
          giftedSeeds={donatedTrees.reduce((sum, tree) => sum + tree.seeds, 0)}
          rank={59}
        />
      )}

      {currentScreen === 'ranking' && (
        <RankingScreen 
          onBack={() => handleNavigate('profile')} 
          currentUserSeeds={seeds}
          currentUserRank={59}
          currentUserId={userId || undefined}
        />
      )}

      {currentScreen === 'donatedTrees' && (
        <DonatedTreesScreen 
          onBack={() => handleNavigate('myfield')}
          donatedTrees={donatedTrees}
          onTreeClick={handleDonatedTreeClick}
        />
      )}

      {/* Bottom Navigation */}
      {showBottomNav && (
        <BottomNav active={currentScreen} onNavigate={handleNavigate} />
      )}

      {/* Mission Complete Modal */}
      <MissionCompleteModal mission={completedMission} onClose={handleModalClose} />

      {/* Tree Selection Modal */}
      {showTreeSelection && (
        <TreeSelectionModal
          onSelect={handleTreeSelect}
          onClose={() => setShowTreeSelection(false)}
        />
      )}

      {/* Donation Complete Modal */}
      {showDonationCompleteModal && lastDonation && (
        <DonationCompleteModal
          tree={lastDonation.tree}
          organizationName={getOrganizationName(lastDonation.organizationId)}
          seeds={lastDonation.seeds}
          onClose={handleCloseDonationModal}
        />
      )}

      {/* Donated Tree Info Modal */}
      {selectedDonatedTree && (
        <DonationCompleteModal
          tree={selectedDonatedTree.treeType}
          organizationName="기부 단체"
          seeds={selectedDonatedTree.seeds}
          onClose={handleCloseDonatedTreeModal}
        />
      )}

      {/* Toast notifications */}
      <Toaster position="top-center" richColors />
    </div>
  );
}