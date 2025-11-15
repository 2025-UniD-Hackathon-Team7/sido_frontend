# SIDO 앱 백엔드 연동 완료

## 구현된 기능

### 1. 사용자 인증 (Authentication)
- **회원가입**: 이메일, 비밀번호, 닉네임으로 새 계정 생성 (회원가입 시 자동 로그인)
- **로그인**: 기존 계정으로 로그인 및 세션 유지
- **자동 로그인**: 저장된 토큰으로 자동 로그인 (30일 유효)
- **보안**: SHA-256 해시를 사용한 비밀번호 암호화

### 2. 백엔드 API 엔드포인트

#### 인증 관련
- `POST /make-server-30914540/signup` - 회원가입
- `POST /make-server-30914540/login` - 로그인
- `GET /make-server-30914540/health` - 서버 상태 확인

#### 사용자 데이터 관리
- `GET /make-server-30914540/user` - 사용자 정보 조회 (인증 필요)
- `PUT /make-server-30914540/user` - 사용자 정보 업데이트 (인증 필요)

#### 미션 관리
- `GET /make-server-30914540/missions` - 미션 목록 조회
- `POST /make-server-30914540/missions/complete` - 미션 완료 처리 (인증 필요)

#### 나무 관리
- `POST /make-server-30914540/trees/donate` - 나무 기부 (인증 필요)

#### 랭킹
- `GET /make-server-30914540/ranking` - 전체 사용자 랭킹 조회

### 3. 프론트엔드 연동

#### 클라이언트 유틸리티 (`/utils/supabase/client.tsx`)
- `signup()` - 회원가입
- `login()` - 로그인
- `logout()` - 로그아웃
- `getUser()` - 사용자 정보 가져오기
- `updateUser()` - 사용자 정보 업데이트
- `getMissions()` - 미션 목록 가져오기
- `completeMission()` - 미션 완료
- `donateTree()` - 나무 기부
- `getRanking()` - 랭킹 조회

#### 업데이트된 컴포넌트
- **LoginScreen**: 회원가입/로그인 UI 및 실제 API 연동
- **App.tsx**: 사용자 세션 관리 및 서버 데이터 동기화
- **RankingScreen**: 실시간 랭킹 데이터 표시

### 4. 데이터 저장 구조

KV Store를 사용하여 다음 데이터 저장:

```typescript
// user:{userId}
{
  id: string,
  email: string,
  nickname: string,
  seeds: number,
  currentTree: TreeType | null,
  completedMissions: string[],
  donatedTrees: DonatedTree[],
  level: number,
  xp: number,
  activityHistory: ActivityRecord[],
  createdAt: string,
  updatedAt: string
}

// missions
[
  {
    id: string,
    title: string,
    reward: number,
    emoji: string,
    description: string,
    timeOfDay: 'morning' | 'afternoon' | 'evening',
    category: string,
    difficulty: 'easy' | 'medium' | 'hard'
  }
]
```

### 5. 보안
- SHA-256을 사용한 비밀번호 해싱
- Base64 인코딩된 토큰 기반 세션 관리 (30일 유효)
- 보호된 엔드포인트에 대한 토큰 검증
- localStorage를 통한 토큰 저장 및 자동 로그인
- 비밀번호는 절대 응답에 포함되지 않음

## 사용 방법

### 1. 회원가입
1. LoginScreen에서 "회원가입" 버튼 클릭
2. 닉네임, 이메일, 비밀번호 입력
3. "계정 만들기" 버튼 클릭
4. 자동으로 로그인되어 온보딩 화면으로 이동

### 2. 로그인
1. 이메일, 비밀번호 입력
2. "로그인" 버튼 클릭
3. 토큰이 자동으로 저장되어 다음 방문 시 자동 로그인 (30일간 유효)

### 3. 데이터 동기화
- 미션 완료 시 자동으로 서버에 저장
- 나무 심기/기부 시 자동으로 서버에 동기화
- 앱 시작 시 서버에서 최신 데이터 로드

## 다음 단계 (선택사항)

### 추가 가능한 기능
1. **소셜 로그인**: 카카오, 구글, 애플 로그인 연동
2. **비밀번호 재설정**: 이메일을 통한 비밀번호 복구
3. **프로필 이미지**: 사용자 프로필 사진 업로드
4. **친구 기능**: 친구 추가 및 미션 공유
5. **푸시 알림**: 미션 리마인더 알림
6. **배지 시스템**: 업적 및 배지 시스템
7. **월간 챌린지**: 매월 특별 미션 및 이벤트

### 성능 최적화
- React Query 또는 SWR을 사용한 데이터 캐싱
- 낙관적 업데이트 (Optimistic Updates)
- 이미지 최적화 및 레이지 로딩

## 문제 해결

### 로그인이 안 되는 경우
1. 콘솔에서 에러 메시지 확인
2. 네트워크 탭에서 API 응답 확인
3. 이메일/비밀번호 형식 확인

### 데이터가 동기화되지 않는 경우
1. 로그인 상태 확인 (토큰 유효성)
2. 네트워크 연결 확인
3. 서버 로그 확인 (콘솔에 자동으로 출력됨)

## 기술 스택
- **백엔드**: Supabase Edge Functions (Deno + Hono)
- **인증**: Supabase Auth
- **데이터베이스**: Supabase KV Store (Postgres)
- **프론트엔드**: React + TypeScript
- **알림**: Sonner (Toast notifications)
