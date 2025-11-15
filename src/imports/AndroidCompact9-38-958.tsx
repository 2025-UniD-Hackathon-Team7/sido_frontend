import svgPaths from "./svg-v35p6ydagm";

function Heading() {
  return (
    <div className="h-[24.003px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#5fa895] text-[16px] text-nowrap top-[-2.16px] whitespace-pre">나무 심기</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[19.998px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#4a5565] text-[14px] top-[-2px] w-[191px]">다양한 나무를 심어보세요.</p>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[47.993px] relative shrink-0 w-[190.444px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[3.992px] h-[47.993px] items-start relative w-[190.444px]">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[47.993px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-[47.993px] items-center justify-between relative w-full">
          <Container />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] h-[95.973px] relative shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[95.973px] items-start pb-0 pt-[23.99px] px-[23.99px] relative w-full">
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[69.66px] size-[19.998px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_38_164)" id="Icon">
          <path d={svgPaths.p1a256a00} id="Vector" stroke="var(--stroke-0, #5FA895)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66652" />
          <path d="M9.99909 15.8319V18.3317" id="Vector_2" stroke="var(--stroke-0, #5FA895)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66652" />
        </g>
        <defs>
          <clipPath id="clip0_38_164">
            <rect fill="white" height="19.9982" width="19.9982" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute content-stretch flex h-[15.993px] items-start left-0 top-[23.99px] w-[159.327px]" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[12px] text-center">심은 나무</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[24.003px] left-0 top-[43.97px] w-[159.327px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[24px] left-[79.76px] text-[#5fa895] text-[16px] text-center top-[-2.16px] translate-x-[-50%] w-[41px]">0그루</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="basis-0 grow h-[67.978px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[67.978px] relative w-full">
        <Icon />
        <Paragraph1 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[69.66px] size-[19.998px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_19_1201)" id="Icon">
          <path d={svgPaths.p33db6600} id="Vector" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66652" />
        </g>
        <defs>
          <clipPath id="clip0_19_1201">
            <rect fill="white" height="19.9982" width="19.9982" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute content-stretch flex h-[15.993px] items-start left-0 top-[23.99px] w-[159.327px]" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[12px] text-center">기여 SEED</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[24.003px] left-0 top-[43.97px] w-[159.327px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[79.75px] text-[#fb2c36] text-[16px] text-center text-nowrap top-[-2.16px] translate-x-[-50%] whitespace-pre">0</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="basis-0 grow h-[67.978px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[67.978px] relative w-full">
        <Icon1 />
        <Paragraph3 />
        <Paragraph4 />
      </div>
    </div>
  );
}

function Forest() {
  return (
    <div className="h-[67.978px] relative shrink-0 w-[330.642px]" data-name="Forest">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[11.988px] h-[67.978px] items-start relative w-[330.642px]">
        <Container3 />
        <Container4 />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] h-[101.651px] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0.843px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[101.651px] items-start pb-[0.843px] pl-[16.836px] pr-[0.843px] pt-[16.836px] relative w-full">
          <Forest />
        </div>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[38.638px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[19.996px] items-start relative w-[38.638px]">
        <p className="basis-0 font-['ABeeZee:Regular','Noto_Sans_KR:Regular',sans-serif] grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#6a7282] text-[14px]" style={{ fontVariationSettings: "'wght' 400" }}>
          성장률
        </p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[37px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[37px]">
        <p className="absolute font-['ABeeZee:Regular',sans-serif] leading-[20px] not-italic right-[29.93px] text-[#5fa895] text-[14px] top-0 translate-x-[100%] w-[40px]">0%</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-[237px]" data-name="Container">
      <Text />
      <Text1 />
    </div>
  );
}

function Container6() {
  return <div className="bg-neutral-900 h-[12px] shrink-0 w-[149px]" data-name="Container" />;
}

function PrimitiveDiv() {
  return (
    <div className="bg-green-100 box-border content-stretch flex flex-col h-[11.99px] items-start overflow-clip pr-[160.325px] py-0 relative rounded-[4.27707e+07px] shrink-0 w-full" data-name="Primitive.div">
      <Container6 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7.987px] h-[40px] items-start left-[104.01px] top-[46.39px] w-[231px]" data-name="Container">
      <Container5 />
      <PrimitiveDiv />
    </div>
  );
}

function Paragraph5() {
  return <div className="absolute h-[15.993px] left-[51.01px] top-[26.39px] w-[159.327px]" data-name="Paragraph" />;
}

function Card1() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] h-[101.651px] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0.843px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Container7 />
      <Paragraph5 />
      <p className="absolute font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] left-[104.01px] text-[14px] text-neutral-950 top-[19.39px] w-[247.25px]">참나무</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[38.638px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[19.996px] items-start relative w-[38.638px]">
        <p className="basis-0 font-['ABeeZee:Regular','Noto_Sans_KR:Regular',sans-serif] grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#6a7282] text-[14px]" style={{ fontVariationSettings: "'wght' 400" }}>
          성장률
        </p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[19.996px] relative shrink-0 w-[26.569px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.996px] w-[26.569px]" />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-[122px]" data-name="Container">
      <Text2 />
      <p className="font-['ABeeZee:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#5fa895] text-[14px] w-[40px]">100%</p>
      <Text3 />
    </div>
  );
}

function Container9() {
  return <div className="bg-[#5fa895] h-[12px] shrink-0 w-[396px]" data-name="Container" />;
}

function PrimitiveDiv1() {
  return (
    <div className="bg-[#00a63e] box-border content-stretch flex flex-col h-[11.99px] items-start overflow-clip pr-[160.325px] py-0 relative rounded-[4.27707e+07px] shrink-0 w-full" data-name="Primitive.div">
      <Container9 />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7.987px] items-start left-[104.01px] top-[46.39px] w-[231px]" data-name="Container">
      <Container8 />
      <PrimitiveDiv1 />
    </div>
  );
}

function Paragraph6() {
  return <div className="absolute h-[15.993px] left-[51.01px] top-[26.39px] w-[159.327px]" data-name="Paragraph" />;
}

function Button() {
  return (
    <div className="absolute bg-[#5fa895] h-[30px] left-[248px] rounded-[8px] top-[26px] w-[87px]" data-name="Button">
      <p className="absolute font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] left-[15px] text-[14px] text-nowrap text-white top-[5px] whitespace-pre">기부하기</p>
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] h-[101.651px] relative rounded-[14px] shrink-0 w-[364.315px]" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0.843px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Container10 />
      <Paragraph6 />
      <p className="absolute font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] left-[104.01px] text-[14px] text-neutral-950 top-[19.39px] w-[247.25px]">벚나무</p>
      <Button />
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[671px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[23.99px] h-[671px] items-start px-[23.99px] py-0 relative w-full">
          <Card />
          <Card1 />
          <Card2 />
        </div>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[23.998px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p39340b40} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99984" />
          <path d={svgPaths.p395e6280} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99984" />
        </g>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[16.006px] relative shrink-0 w-[10.38px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16.006px] items-start relative w-[10.38px]">
        <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px] text-nowrap whitespace-pre">홈</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="basis-0 grow h-[63.991px] min-h-px min-w-px relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[3.991px] h-[63.991px] items-center justify-center relative w-full">
        <Icon2 />
        <Text4 />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.pd723c00} id="Vector" stroke="var(--stroke-0, #5FA895)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99997" />
          <path d="M11.9998 21.9997V18.9997" id="Vector_2" stroke="var(--stroke-0, #5FA895)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99997" />
        </g>
      </svg>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[16.006px] relative shrink-0 w-[20.76px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16.006px] items-start relative w-[20.76px]">
        <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#5fa895] text-[12px] text-nowrap whitespace-pre">나무</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="basis-0 grow h-[63.991px] min-h-px min-w-px relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[3.991px] h-[63.991px] items-center justify-center relative w-full">
        <Icon3 />
        <Text5 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[23.998px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p1af190c0} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99984" />
          <path d="M3 3V8H8" id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99984" />
          <path d={svgPaths.p2394cb80} id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99984" />
        </g>
      </svg>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[16.006px] relative shrink-0 w-[20.76px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16.006px] items-start relative w-[20.76px]">
        <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px] text-nowrap whitespace-pre">기록</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="basis-0 grow h-[63.991px] min-h-px min-w-px relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[3.991px] h-[63.991px] items-center justify-center relative w-full">
        <Icon4 />
        <Text6 />
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[23.998px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p36a27680} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99984" />
          <path d={svgPaths.p2885f000} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99984" />
        </g>
      </svg>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[16.006px] relative shrink-0 w-[31.129px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16.006px] items-start relative w-[31.129px]">
        <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px] text-nowrap whitespace-pre">프로필</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="basis-0 grow h-[63.991px] min-h-px min-w-px relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[3.991px] h-[63.991px] items-center justify-center relative w-full">
        <Icon5 />
        <Text7 />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="bg-white content-stretch flex h-[63.991px] items-center justify-between relative shrink-0 w-[393.565px]" data-name="App">
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
    </div>
  );
}

function Forest1() {
  return (
    <div className="bg-[#fefdfb] content-stretch flex flex-col gap-[15.993px] h-[917.334px] items-start relative shrink-0 w-full" data-name="Forest">
      <Container2 />
      <Container11 />
      <App />
    </div>
  );
}

function App1() {
  return (
    <div className="absolute bg-gradient-to-b content-stretch flex flex-col from-[#f0fdf4] h-[917.334px] items-start left-0 to-[#eff6ff] top-0 w-[412.294px]" data-name="App">
      <Forest1 />
    </div>
  );
}

function Container12() {
  return <div className="absolute bg-white h-0 left-0 top-0 w-[412.294px]" data-name="Container" />;
}

function KindnessMissionApp() {
  return (
    <div className="absolute bg-white h-[917px] left-0 top-0 w-[412px]" data-name="Kindness Mission App">
      <App1 />
      <Container12 />
    </div>
  );
}

export default function AndroidCompact() {
  return (
    <div className="bg-white relative size-full" data-name="Android Compact - 9">
      <KindnessMissionApp />
    </div>
  );
}