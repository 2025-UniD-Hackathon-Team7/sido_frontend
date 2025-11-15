import svgPaths from "./svg-qj5hobizv7";

function Icon() {
  return (
    <div className="absolute left-[7.99px] size-[23.998px] top-[7.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p232a9640} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.99984" />
          <path d="M18.9985 11.9991H4.99961" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.99984" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute left-[31.99px] rounded-[16.4px] size-[39.982px] top-[63.99px]" data-name="Button">
      <Icon />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[31.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p2e3c4180} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66585" />
          <path d={svgPaths.p3022b6c0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66585" />
          <path d={svgPaths.p2b05300} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66585" />
          <path d="M5.3317 29.3244H26.6585" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66585" />
          <path d={svgPaths.p130b28f0} id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66585" />
          <path d={svgPaths.p309e37a0} id="Vector_6" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66585" />
        </g>
      </svg>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[39.993px] relative shrink-0 w-[62.269px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[39.993px] relative w-[62.269px]">
        <p className="absolute font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[40px] left-0 not-italic text-[36px] text-nowrap text-white top-[0.6px] tracking-[0.3691px] whitespace-pre">랭킹</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex gap-[11.994px] h-[39.993px] items-center left-[31.99px] top-[135.96px] w-[347.728px]" data-name="Container">
      <Icon1 />
      <Heading />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[28px] left-[31.99px] top-[191.95px] w-[347.728px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[18px] text-[rgba(255,255,255,0.9)] text-nowrap top-[0.49px] tracking-[-0.4395px] whitespace-pre">이번 달 선행 랭킹을 확인하세요</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bg-gradient-to-b from-[#5fa895] from-[75.962%] h-[267.948px] left-0 to-[#5aaa89] top-0 w-[411.708px]" data-name="Container">
      <Button />
      <Container />
      <Paragraph />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[35.992px] relative shrink-0 w-[30.006px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[35.992px] items-start relative w-[30.006px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[36px] not-italic relative shrink-0 text-[30px] text-neutral-950 text-nowrap tracking-[0.3955px] whitespace-pre">🌱</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[#f0faf6] relative rounded-[2.34146e+07px] shrink-0 size-[63.991px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center pl-0 pr-[0.011px] py-0 relative size-[63.991px]">
        <Text />
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[19.997px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-neutral-600 text-nowrap top-[0.4px] tracking-[-0.1504px] whitespace-pre">내 순위</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[31.99px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[32px] left-[-0.37px] not-italic text-[24px] text-neutral-900 top-[-0.34px] tracking-[0.0703px] w-[76px]">59위</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[55.977px] relative shrink-0 w-[51.856px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[3.991px] h-[55.977px] items-start relative w-[51.856px]">
        <Paragraph1 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[63.991px] relative shrink-0 w-[131.843px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[15.995px] h-[63.991px] items-center relative w-[131.843px]">
        <Container2 />
        <Container3 />
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[19.997px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] left-[64px] not-italic text-[14px] text-neutral-600 text-nowrap text-right top-[0.4px] tracking-[-0.1504px] translate-x-[-100%] whitespace-pre">누적 SEED</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[31.99px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-[63.9px] not-italic text-[#5fa895] text-[24px] text-nowrap text-right top-[-0.6px] tracking-[0.0703px] translate-x-[-100%] whitespace-pre">1200</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[55.977px] relative shrink-0 w-[63.174px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[3.991px] h-[55.977px] items-start relative w-[63.174px]">
        <Paragraph3 />
        <Paragraph4 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex h-[63.991px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container4 />
      <Container5 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[114.779px] items-start left-[31.99px] pb-[1.396px] pt-[25.394px] px-[25.394px] rounded-[24px] top-[243.95px] w-[347.728px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#5fa895] border-[1.396px] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <Container6 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[19.997px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[61.08%_58.33%_8.42%_29.17%]" data-name="Vector">
        <div className="absolute inset-[-13.66%_-33.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 8">
            <path d={svgPaths.p353b2f20} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66639" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[61.08%_29.17%_8.42%_58.33%]" data-name="Vector">
        <div className="absolute inset-[-13.66%_-33.33%_-13.66%_-33.34%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 8">
            <path d={svgPaths.p1bb04a00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66639" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[62.5%] left-3/4 right-[8.33%] top-[16.67%]" data-name="Vector">
        <div className="absolute inset-[-20%_-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 6">
            <path d={svgPaths.p25542000} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66639" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[91.67%_16.67%_8.33%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-0.83px_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 2">
            <path d="M0.833193 0.833193H14.1643" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66639" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-7.69%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 13">
            <path d={svgPaths.p27f3bb00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66639" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[62.5%] left-[8.33%] right-3/4 top-[16.67%]" data-name="Vector">
        <div className="absolute inset-[-20%_-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 6">
            <path d={svgPaths.p3b475300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66639" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[#5fa895] relative rounded-[2.34146e+07px] shrink-0 size-[35.981px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[7.992px] px-[7.992px] relative size-[35.981px]">
        <Icon2 />
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[23.987px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[16px] text-neutral-900 text-nowrap top-[-0.91px] tracking-[-0.3125px] whitespace-pre">랭킹 업데이트</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal h-[45.489px] leading-[22.75px] not-italic relative shrink-0 text-[14px] text-neutral-600 text-nowrap tracking-[-0.1504px] w-full whitespace-pre" data-name="Paragraph">
      <p className="absolute left-0 top-[0.79px]">랭킹은 매일 자정에 업데이트되며,</p>
      <p className="absolute left-0 top-[23.54px]">이번 달 누적 SEED 기준으로 산정됩니다.</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="basis-0 grow h-[73.466px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[3.991px] h-[73.466px] items-start relative w-full">
        <Paragraph5 />
        <Paragraph6 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex gap-[11.994px] h-[73.466px] items-start relative shrink-0 w-full" data-name="Container">
      <Container8 />
      <Container9 />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute bg-[#f0faf6] box-border content-stretch flex flex-col h-[121.463px] items-start left-[32px] pb-0 pt-[23.998px] px-[23.998px] rounded-[24px] top-[1500px] w-[348.02px]" data-name="Container">
      <Container10 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[23.998px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p230e7380} id="Vector" stroke="var(--stroke-0, #FFD700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99984" />
          <path d={svgPaths.p11fd8920} id="Vector_2" stroke="var(--stroke-0, #FFD700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99984" />
          <path d={svgPaths.p110ee200} id="Vector_3" stroke="var(--stroke-0, #FFD700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99984" />
          <path d="M3.99969 21.9983H19.9984" id="Vector_4" stroke="var(--stroke-0, #FFD700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99984" />
          <path d={svgPaths.p1c14f700} id="Vector_5" stroke="var(--stroke-0, #FFD700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99984" />
          <path d={svgPaths.p3ad8d700} id="Vector_6" stroke="var(--stroke-0, #FFD700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99984" />
        </g>
      </svg>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute box-border content-stretch flex h-[23.998px] items-center justify-center left-0 pl-0 pr-[0.011px] py-0 top-[16px] w-[47.996px]" data-name="Container">
      <Icon3 />
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[31.99px] relative shrink-0 w-[23.726px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[31.99px] relative w-[23.726px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32px] left-0 not-italic text-[24px] text-neutral-950 text-nowrap top-[-0.6px] tracking-[0.0703px] whitespace-pre">🌟</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute bg-white box-border content-stretch flex items-center justify-center left-[63.99px] rounded-[2.34146e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] size-[55.999px] top-0" data-name="Container">
      <Text1 />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[23.987px] relative shrink-0 w-[55.345px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[23.987px] relative w-[55.345px]">
        <p className="absolute font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[16px] text-neutral-900 text-nowrap top-[-0.91px] tracking-[-0.3125px] whitespace-pre">선한이웃</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="bg-[#f0faf6] h-[19.997px] relative rounded-[2.34146e+07px] shrink-0 w-[39.11px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.997px] relative w-[39.11px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[7.99px] not-italic text-[#5fa895] text-[12px] top-[2px] w-[24px]">Lv.8</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex gap-[7.992px] h-[23.987px] items-center left-0 top-0 w-[134.361px]" data-name="Container">
      <Paragraph7 />
      <Text2 />
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute h-[19.997px] left-0 top-[27.98px] w-[56.719px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-neutral-600 top-[0.4px] tracking-[-0.1504px] w-[57px]">🌱 3,420</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute h-[47.974px] left-[135.99px] top-[4.01px] w-[134.361px]" data-name="Container">
      <Container14 />
      <Text3 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="basis-0 grow h-[19.997px] min-h-px min-w-px relative shrink-0" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.997px] overflow-clip relative rounded-[inherit] w-full">
        <div className="absolute inset-[8.33%_9.98%_37.5%_9.96%]" data-name="Vector">
          <div className="absolute inset-[-7.69%_-5.2%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 13">
              <path d={svgPaths.p206d1300} id="Vector" stroke="var(--stroke-0, #FFD700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66639" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/2 left-[21.33%] right-[54.17%] top-[9.17%]" data-name="Vector">
          <div className="absolute inset-[-10.21%_-17.01%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 10">
              <path d={svgPaths.p352b3040} id="Vector" stroke="var(--stroke-0, #FFD700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66639" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/2 left-[54.17%] right-[21.33%] top-[9.17%]" data-name="Vector">
          <div className="absolute inset-[-10.21%_-17.01%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 10">
              <path d={svgPaths.p22e3da00} id="Vector" stroke="var(--stroke-0, #FFD700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66639" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[29.17%_33.33%_70.83%_33.33%]" data-name="Vector">
          <div className="absolute inset-[-0.83px_-12.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 2">
              <path d="M0.833193 0.833193H7.49873" id="Vector" stroke="var(--stroke-0, #FFD700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66639" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[8.33%] left-[29.17%] right-[29.17%] top-1/2" data-name="Vector">
          <div className="absolute inset-[-10%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
              <path d={svgPaths.p29d63730} id="Vector" stroke="var(--stroke-0, #FFD700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66639" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-[47.92%] right-1/2 top-[66.67%]" data-name="Vector">
          <div className="absolute inset-[-49.99%_-199.97%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 4">
              <path d={svgPaths.p1d697580} id="Vector" stroke="var(--stroke-0, #FFD700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66639" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex items-center left-[286.34px] size-[19.997px] top-[18px]" data-name="Container">
      <Icon4 />
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[55.999px] relative shrink-0 w-full" data-name="Container">
      <Container12 />
      <Container13 />
      <Container15 />
      <Container16 />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute bg-gradient-to-b box-border content-stretch flex flex-col from-[#fff8dc] h-[97.388px] items-start left-0 pb-[0.698px] pt-[20.694px] px-[20.694px] rounded-[24px] to-[#ffe4b5] top-0 w-[347.728px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.698px] border-neutral-200 border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Container17 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[23.998px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p230e7380} id="Vector" stroke="var(--stroke-0, #C0C0C0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99984" />
          <path d={svgPaths.p11fd8920} id="Vector_2" stroke="var(--stroke-0, #C0C0C0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99984" />
          <path d={svgPaths.p110ee200} id="Vector_3" stroke="var(--stroke-0, #C0C0C0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99984" />
          <path d="M3.99969 21.9983H19.9984" id="Vector_4" stroke="var(--stroke-0, #C0C0C0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99984" />
          <path d={svgPaths.p1c14f700} id="Vector_5" stroke="var(--stroke-0, #C0C0C0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99984" />
          <path d={svgPaths.p3ad8d700} id="Vector_6" stroke="var(--stroke-0, #C0C0C0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99984" />
        </g>
      </svg>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute box-border content-stretch flex h-[23.998px] items-center justify-center left-0 pl-0 pr-[0.011px] py-0 top-[16px] w-[47.996px]" data-name="Container">
      <Icon5 />
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[31.99px] relative shrink-0 w-[23.726px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[31.99px] relative w-[23.726px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32px] left-0 not-italic text-[24px] text-neutral-950 text-nowrap top-[-0.6px] tracking-[0.0703px] whitespace-pre">🌸</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute bg-white box-border content-stretch flex items-center justify-center left-[63.99px] rounded-[2.34146e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] size-[55.999px] top-0" data-name="Container">
      <Text4 />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[23.987px] relative shrink-0 w-[69.181px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[23.987px] relative w-[69.181px]">
        <p className="absolute font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[16px] text-neutral-900 text-nowrap top-[-0.91px] tracking-[-0.3125px] whitespace-pre">따뜻한마음</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="bg-[#f0faf6] h-[19.997px] relative rounded-[2.34146e+07px] shrink-0 w-[38.227px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.997px] relative w-[38.227px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[7.99px] not-italic text-[#5fa895] text-[12px] top-[2px] w-[23px]">Lv.7</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex gap-[7.992px] h-[23.987px] items-center left-0 top-0 w-[134.361px]" data-name="Container">
      <Paragraph8 />
      <Text5 />
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute h-[19.997px] left-0 top-[27.98px] w-[54.691px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-neutral-600 top-[0.4px] tracking-[-0.1504px] w-[55px]">🌱 3,180</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute h-[47.974px] left-[135.99px] top-[4.01px] w-[134.361px]" data-name="Container">
      <Container21 />
      <Text6 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="basis-0 grow h-[19.997px] min-h-px min-w-px relative shrink-0" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.997px] overflow-clip relative rounded-[inherit] w-full">
        <div className="absolute inset-[8.33%_9.98%_37.5%_9.96%]" data-name="Vector">
          <div className="absolute inset-[-7.69%_-5.2%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 13">
              <path d={svgPaths.p206d1300} id="Vector" stroke="var(--stroke-0, #C0C0C0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66639" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/2 left-[21.33%] right-[54.17%] top-[9.17%]" data-name="Vector">
          <div className="absolute inset-[-10.21%_-17.01%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 10">
              <path d={svgPaths.p352b3040} id="Vector" stroke="var(--stroke-0, #C0C0C0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66639" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/2 left-[54.17%] right-[21.33%] top-[9.17%]" data-name="Vector">
          <div className="absolute inset-[-10.21%_-17.01%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 10">
              <path d={svgPaths.p22e3da00} id="Vector" stroke="var(--stroke-0, #C0C0C0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66639" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[29.17%_33.33%_70.83%_33.33%]" data-name="Vector">
          <div className="absolute inset-[-0.83px_-12.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 2">
              <path d="M0.833193 0.833193H7.49873" id="Vector" stroke="var(--stroke-0, #C0C0C0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66639" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[8.33%] left-[29.17%] right-[29.17%] top-1/2" data-name="Vector">
          <div className="absolute inset-[-10%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
              <path d={svgPaths.p29d63730} id="Vector" stroke="var(--stroke-0, #C0C0C0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66639" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-[47.92%] right-1/2 top-[66.67%]" data-name="Vector">
          <div className="absolute inset-[-49.99%_-199.97%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 4">
              <path d={svgPaths.p1d697580} id="Vector" stroke="var(--stroke-0, #C0C0C0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66639" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex items-center left-[286.34px] size-[19.997px] top-[18px]" data-name="Container">
      <Icon6 />
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[55.999px] relative shrink-0 w-full" data-name="Container">
      <Container19 />
      <Container20 />
      <Container22 />
      <Container23 />
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute bg-gradient-to-b box-border content-stretch flex flex-col from-[#f5f5f5] h-[97.388px] items-start left-0 pb-[0.698px] pt-[20.694px] px-[20.694px] rounded-[24px] to-[#e8e8e8] top-[109.38px] w-[347.728px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.698px] border-neutral-200 border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Container24 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[23.998px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.pce34100} id="Vector" stroke="var(--stroke-0, #CD7F32)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99984" />
          <path d={svgPaths.p5fab80} id="Vector_2" stroke="var(--stroke-0, #CD7F32)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99984" />
          <path d={svgPaths.p110ee200} id="Vector_3" stroke="var(--stroke-0, #CD7F32)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99984" />
          <path d="M3.99969 21.9983H19.9984" id="Vector_4" stroke="var(--stroke-0, #CD7F32)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99984" />
          <path d={svgPaths.p1c14f700} id="Vector_5" stroke="var(--stroke-0, #CD7F32)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99984" />
          <path d={svgPaths.p3ad8d700} id="Vector_6" stroke="var(--stroke-0, #CD7F32)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99984" />
        </g>
      </svg>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute box-border content-stretch flex h-[23.998px] items-center justify-center left-0 pl-0 pr-[0.011px] py-0 top-[16px] w-[47.996px]" data-name="Container">
      <Icon7 />
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[31.99px] relative shrink-0 w-[23.726px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[31.99px] relative w-[23.726px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32px] left-0 not-italic text-[24px] text-neutral-950 text-nowrap top-[-0.6px] tracking-[0.0703px] whitespace-pre">🌺</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute bg-white box-border content-stretch flex items-center justify-center left-[63.99px] rounded-[2.34146e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] size-[55.999px] top-0" data-name="Container">
      <Text7 />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[23.987px] relative shrink-0 w-[55.345px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[23.987px] relative w-[55.345px]">
        <p className="absolute font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[16px] text-neutral-900 text-nowrap top-[-0.91px] tracking-[-0.3125px] whitespace-pre">착한친구</p>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="bg-[#f0faf6] h-[19.997px] relative rounded-[2.34146e+07px] shrink-0 w-[38.227px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.997px] relative w-[38.227px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[7.99px] not-italic text-[#5fa895] text-[12px] top-[2px] w-[23px]">Lv.7</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute content-stretch flex gap-[7.992px] h-[23.987px] items-center left-0 top-0 w-[134.361px]" data-name="Container">
      <Paragraph9 />
      <Text8 />
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute h-[19.997px] left-0 top-[27.98px] w-[56.632px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-neutral-600 top-[0.4px] tracking-[-0.1504px] w-[57px]">🌱 2,950</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute h-[47.974px] left-[135.99px] top-[4.01px] w-[134.361px]" data-name="Container">
      <Container28 />
      <Text9 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="basis-0 grow h-[19.997px] min-h-px min-w-px relative shrink-0" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.997px] overflow-clip relative rounded-[inherit] w-full">
        <div className="absolute inset-[8.33%_9.98%_37.5%_9.96%]" data-name="Vector">
          <div className="absolute inset-[-7.69%_-5.2%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 13">
              <path d={svgPaths.p206d1300} id="Vector" stroke="var(--stroke-0, #CD7F32)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66639" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/2 left-[21.33%] right-[54.17%] top-[9.17%]" data-name="Vector">
          <div className="absolute inset-[-10.21%_-17.01%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 10">
              <path d={svgPaths.p352b3040} id="Vector" stroke="var(--stroke-0, #CD7F32)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66639" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/2 left-[54.17%] right-[21.33%] top-[9.17%]" data-name="Vector">
          <div className="absolute inset-[-10.21%_-17.01%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 10">
              <path d={svgPaths.p22e3da00} id="Vector" stroke="var(--stroke-0, #CD7F32)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66639" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[29.17%_33.33%_70.83%_33.33%]" data-name="Vector">
          <div className="absolute inset-[-0.83px_-12.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 2">
              <path d="M0.833193 0.833193H7.49873" id="Vector" stroke="var(--stroke-0, #CD7F32)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66639" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[8.33%] left-[29.17%] right-[29.17%] top-1/2" data-name="Vector">
          <div className="absolute inset-[-10%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
              <path d={svgPaths.p29d63730} id="Vector" stroke="var(--stroke-0, #CD7F32)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66639" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-[47.92%] right-1/2 top-[66.67%]" data-name="Vector">
          <div className="absolute inset-[-49.99%_-199.97%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 4">
              <path d={svgPaths.p1d697580} id="Vector" stroke="var(--stroke-0, #CD7F32)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66639" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute content-stretch flex items-center left-[286.34px] size-[19.997px] top-[18px]" data-name="Container">
      <Icon8 />
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[55.999px] relative shrink-0 w-full" data-name="Container">
      <Container26 />
      <Container27 />
      <Container29 />
      <Container30 />
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute bg-gradient-to-b box-border content-stretch flex flex-col from-[#fff0e6] h-[97.388px] items-start left-0 pb-[0.698px] pt-[20.694px] px-[20.694px] rounded-[24px] to-[#ffe4cc] top-[218.76px] w-[347.728px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.698px] border-neutral-200 border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Container31 />
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[28px] relative shrink-0 w-[11.895px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[11.895px]">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[18px] text-neutral-600 text-nowrap top-[0.49px] tracking-[-0.4395px] whitespace-pre">4</p>
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[31.99px] relative shrink-0 w-[23.726px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[31.99px] relative w-[23.726px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32px] left-0 not-italic text-[24px] text-neutral-950 text-nowrap top-[-0.6px] tracking-[0.0703px] whitespace-pre">🌼</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="bg-white relative rounded-[2.34146e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 size-[55.999px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[55.999px]">
        <Text11 />
      </div>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[23.987px] relative shrink-0 w-[41.509px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[23.987px] relative w-[41.509px]">
        <p className="absolute font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[16px] text-neutral-900 text-nowrap top-[-0.91px] tracking-[-0.3125px] whitespace-pre">친절왕</p>
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="bg-[#f0faf6] h-[19.997px] relative rounded-[2.34146e+07px] shrink-0 w-[38.99px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.997px] relative w-[38.99px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[7.99px] not-italic text-[#5fa895] text-[12px] top-[2px] w-[24px]">Lv.6</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute content-stretch flex gap-[7.992px] h-[23.987px] items-center left-0 top-0 w-[170.353px]" data-name="Container">
      <Paragraph10 />
      <Text12 />
    </div>
  );
}

function Text13() {
  return (
    <div className="absolute h-[19.997px] left-0 top-[27.98px] w-[55.847px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-neutral-600 top-[0.4px] tracking-[-0.1504px] w-[56px]">🌱 2,780</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="basis-0 grow h-[47.974px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[47.974px] relative w-full">
        <Container34 />
        <Text13 />
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[55.999px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[34.051px] h-[55.999px] items-center pl-[18.045px] pr-0 py-0 relative w-full">
          <Text10 />
          <Container33 />
          <Container35 />
        </div>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[97.388px] items-start left-0 pb-[0.698px] pt-[20.694px] px-[20.694px] rounded-[24px] top-[328.15px] w-[347.728px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.698px] border-neutral-200 border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Container36 />
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[28px] relative shrink-0 w-[11.47px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[11.47px]">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[18px] text-neutral-600 text-nowrap top-[0.49px] tracking-[-0.4395px] whitespace-pre">5</p>
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="h-[31.99px] relative shrink-0 w-[23.726px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[31.99px] relative w-[23.726px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32px] left-0 not-italic text-[24px] text-neutral-950 text-nowrap top-[-0.6px] tracking-[0.0703px] whitespace-pre">🌻</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="bg-white relative rounded-[2.34146e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 size-[55.999px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[55.999px]">
        <Text15 />
      </div>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[23.987px] relative shrink-0 w-[55.345px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[23.987px] relative w-[55.345px]">
        <p className="absolute font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[16px] text-neutral-900 text-nowrap top-[-0.91px] tracking-[-0.3125px] whitespace-pre">미소천사</p>
      </div>
    </div>
  );
}

function Text16() {
  return (
    <div className="bg-[#f0faf6] h-[19.997px] relative rounded-[2.34146e+07px] shrink-0 w-[38.99px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.997px] relative w-[38.99px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[7.99px] not-italic text-[#5fa895] text-[12px] top-[2px] w-[24px]">Lv.6</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute content-stretch flex gap-[7.992px] h-[23.987px] items-center left-0 top-0 w-[170.353px]" data-name="Container">
      <Paragraph11 />
      <Text16 />
    </div>
  );
}

function Text17() {
  return (
    <div className="absolute h-[19.997px] left-0 top-[27.98px] w-[56.632px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-neutral-600 top-[0.4px] tracking-[-0.1504px] w-[57px]">🌱 2,650</p>
    </div>
  );
}

function Container40() {
  return (
    <div className="basis-0 grow h-[47.974px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[47.974px] relative w-full">
        <Container39 />
        <Text17 />
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[55.999px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[34.258px] h-[55.999px] items-center pl-[18.263px] pr-0 py-0 relative w-full">
          <Text14 />
          <Container38 />
          <Container40 />
        </div>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[97.388px] items-start left-0 pb-[0.698px] pt-[20.694px] px-[20.694px] rounded-[24px] top-[437.53px] w-[347.728px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.698px] border-neutral-200 border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Container41 />
    </div>
  );
}

function Text18() {
  return (
    <div className="h-[28px] relative shrink-0 w-[11.841px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[11.841px]">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[18px] text-neutral-600 text-nowrap top-[0.49px] tracking-[-0.4395px] whitespace-pre">6</p>
      </div>
    </div>
  );
}

function Text19() {
  return (
    <div className="h-[31.99px] relative shrink-0 w-[23.726px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[31.99px] relative w-[23.726px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32px] left-0 not-italic text-[24px] text-neutral-950 text-nowrap top-[-0.6px] tracking-[0.0703px] whitespace-pre">🌷</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="bg-white relative rounded-[2.34146e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 size-[55.999px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[55.999px]">
        <Text19 />
      </div>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[23.987px] relative shrink-0 w-[69.181px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[23.987px] relative w-[69.181px]">
        <p className="absolute font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[16px] text-neutral-900 text-nowrap top-[-0.91px] tracking-[-0.3125px] whitespace-pre">행복전도사</p>
      </div>
    </div>
  );
}

function Text20() {
  return (
    <div className="bg-[#f0faf6] h-[19.997px] relative rounded-[2.34146e+07px] shrink-0 w-[38.99px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.997px] relative w-[38.99px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[7.99px] not-italic text-[#5fa895] text-[12px] top-[2px] w-[24px]">Lv.6</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute content-stretch flex gap-[7.992px] h-[23.987px] items-center left-0 top-0 w-[170.353px]" data-name="Container">
      <Paragraph12 />
      <Text20 />
    </div>
  );
}

function Text21() {
  return (
    <div className="absolute h-[19.997px] left-0 top-[27.98px] w-[56.272px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-neutral-600 top-[0.4px] tracking-[-0.1504px] w-[57px]">🌱 2,520</p>
    </div>
  );
}

function Container45() {
  return (
    <div className="basis-0 grow h-[47.974px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[47.974px] relative w-full">
        <Container44 />
        <Text21 />
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[55.999px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[34.073px] h-[55.999px] items-center pl-[18.078px] pr-0 py-0 relative w-full">
          <Text18 />
          <Container43 />
          <Container45 />
        </div>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[97.388px] items-start left-0 pb-[0.698px] pt-[20.694px] px-[20.694px] rounded-[24px] top-[546.91px] w-[347.728px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.698px] border-neutral-200 border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Container46 />
    </div>
  );
}

function Text22() {
  return (
    <div className="h-[28px] relative shrink-0 w-[10.424px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[10.424px]">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[18px] text-neutral-600 text-nowrap top-[0.49px] tracking-[-0.4395px] whitespace-pre">7</p>
      </div>
    </div>
  );
}

function Text23() {
  return (
    <div className="h-[31.99px] relative shrink-0 w-[23.726px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[31.99px] relative w-[23.726px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32px] left-0 not-italic text-[24px] text-neutral-950 text-nowrap top-[-0.6px] tracking-[0.0703px] whitespace-pre">✨</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="bg-white relative rounded-[2.34146e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 size-[55.999px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[55.999px]">
        <Text23 />
      </div>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[23.987px] relative shrink-0 w-[55.345px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[23.987px] relative w-[55.345px]">
        <p className="absolute font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[16px] text-neutral-900 text-nowrap top-[-0.91px] tracking-[-0.3125px] whitespace-pre">빛나는별</p>
      </div>
    </div>
  );
}

function Text24() {
  return (
    <div className="bg-[#f0faf6] h-[19.997px] relative rounded-[2.34146e+07px] shrink-0 w-[38.881px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.997px] relative w-[38.881px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[7.99px] not-italic text-[#5fa895] text-[12px] top-[2px] w-[23px]">Lv.5</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute content-stretch flex gap-[7.992px] h-[23.987px] items-center left-0 top-0 w-[170.353px]" data-name="Container">
      <Paragraph13 />
      <Text24 />
    </div>
  );
}

function Text25() {
  return (
    <div className="absolute h-[19.997px] left-0 top-[27.98px] w-[56.926px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-neutral-600 top-[0.4px] tracking-[-0.1504px] w-[57px]">🌱 2,380</p>
    </div>
  );
}

function Container50() {
  return (
    <div className="basis-0 grow h-[47.974px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[47.974px] relative w-full">
        <Container49 />
        <Text25 />
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="h-[55.999px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[34.781px] h-[55.999px] items-center pl-[18.786px] pr-0 py-0 relative w-full">
          <Text22 />
          <Container48 />
          <Container50 />
        </div>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[97.388px] items-start left-0 pb-[0.698px] pt-[20.694px] px-[20.694px] rounded-[24px] top-[656.29px] w-[347.728px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.698px] border-neutral-200 border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Container51 />
    </div>
  );
}

function Text26() {
  return (
    <div className="h-[28px] relative shrink-0 w-[12.015px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[12.015px]">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[18px] text-neutral-600 text-nowrap top-[0.49px] tracking-[-0.4395px] whitespace-pre">8</p>
      </div>
    </div>
  );
}

function Text27() {
  return (
    <div className="h-[31.99px] relative shrink-0 w-[23.726px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[31.99px] relative w-[23.726px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32px] left-0 not-italic text-[24px] text-neutral-950 text-nowrap top-[-0.6px] tracking-[0.0703px] whitespace-pre">🌈</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="bg-white relative rounded-[2.34146e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 size-[55.999px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[55.999px]">
        <Text27 />
      </div>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[23.987px] relative shrink-0 w-[55.345px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[23.987px] relative w-[55.345px]">
        <p className="absolute font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[16px] text-neutral-900 text-nowrap top-[-0.91px] tracking-[-0.3125px] whitespace-pre">온기나눔</p>
      </div>
    </div>
  );
}

function Text28() {
  return (
    <div className="bg-[#f0faf6] h-[19.997px] relative rounded-[2.34146e+07px] shrink-0 w-[38.881px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.997px] relative w-[38.881px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[7.99px] not-italic text-[#5fa895] text-[12px] top-[2px] w-[23px]">Lv.5</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute content-stretch flex gap-[7.992px] h-[23.987px] items-center left-0 top-0 w-[170.353px]" data-name="Container">
      <Paragraph14 />
      <Text28 />
    </div>
  );
}

function Text29() {
  return (
    <div className="absolute h-[19.997px] left-0 top-[27.98px] w-[56.599px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-neutral-600 top-[0.4px] tracking-[-0.1504px] w-[57px]">🌱 2,240</p>
    </div>
  );
}

function Container55() {
  return (
    <div className="basis-0 grow h-[47.974px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[47.974px] relative w-full">
        <Container54 />
        <Text29 />
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="h-[55.999px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[33.986px] h-[55.999px] items-center pl-[17.99px] pr-0 py-0 relative w-full">
          <Text26 />
          <Container53 />
          <Container55 />
        </div>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[97.388px] items-start left-0 pb-[0.698px] pt-[20.694px] px-[20.694px] rounded-[24px] top-[765.67px] w-[347.728px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.698px] border-neutral-200 border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Container56 />
    </div>
  );
}

function Text30() {
  return (
    <div className="h-[28px] relative shrink-0 w-[11.841px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[11.841px]">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[18px] text-neutral-600 text-nowrap top-[0.49px] tracking-[-0.4395px] whitespace-pre">9</p>
      </div>
    </div>
  );
}

function Text31() {
  return (
    <div className="h-[31.99px] relative shrink-0 w-[23.726px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[31.99px] relative w-[23.726px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32px] left-0 not-italic text-[24px] text-neutral-950 text-nowrap top-[-0.6px] tracking-[0.0703px] whitespace-pre">🍀</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="bg-white relative rounded-[2.34146e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 size-[55.999px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[55.999px]">
        <Text31 />
      </div>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[23.987px] relative shrink-0 w-[55.345px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[23.987px] relative w-[55.345px]">
        <p className="absolute font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[16px] text-neutral-900 text-nowrap top-[-0.91px] tracking-[-0.3125px] whitespace-pre">희망씨앗</p>
      </div>
    </div>
  );
}

function Text32() {
  return (
    <div className="bg-[#f0faf6] h-[19.997px] relative rounded-[2.34146e+07px] shrink-0 w-[38.881px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.997px] relative w-[38.881px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[7.99px] not-italic text-[#5fa895] text-[12px] top-[2px] w-[23px]">Lv.5</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="absolute content-stretch flex gap-[7.992px] h-[23.987px] items-center left-0 top-0 w-[170.353px]" data-name="Container">
      <Paragraph15 />
      <Text32 />
    </div>
  );
}

function Text33() {
  return (
    <div className="absolute h-[19.997px] left-0 top-[27.98px] w-[54.516px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-neutral-600 top-[0.4px] tracking-[-0.1504px] w-[55px]">🌱 2,100</p>
    </div>
  );
}

function Container60() {
  return (
    <div className="basis-0 grow h-[47.974px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[47.974px] relative w-full">
        <Container59 />
        <Text33 />
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="h-[55.999px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[34.073px] h-[55.999px] items-center pl-[18.078px] pr-0 py-0 relative w-full">
          <Text30 />
          <Container58 />
          <Container60 />
        </div>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[97.388px] items-start left-0 pb-[0.698px] pt-[20.694px] px-[20.694px] rounded-[24px] top-[875.05px] w-[347.728px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.698px] border-neutral-200 border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Container61 />
    </div>
  );
}

function Text34() {
  return (
    <div className="h-[28px] relative shrink-0 w-[20.607px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[20.607px]">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[18px] text-neutral-600 text-nowrap top-[0.49px] tracking-[-0.4395px] whitespace-pre">10</p>
      </div>
    </div>
  );
}

function Text35() {
  return (
    <div className="h-[31.99px] relative shrink-0 w-[23.726px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[31.99px] relative w-[23.726px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32px] left-0 not-italic text-[24px] text-neutral-950 text-nowrap top-[-0.6px] tracking-[0.0703px] whitespace-pre">💚</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="bg-white relative rounded-[2.34146e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 size-[55.999px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[55.999px]">
        <Text35 />
      </div>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[23.987px] relative shrink-0 w-[55.345px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[23.987px] relative w-[55.345px]">
        <p className="absolute font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[16px] text-neutral-900 text-nowrap top-[-0.91px] tracking-[-0.3125px] whitespace-pre">사랑듬뿍</p>
      </div>
    </div>
  );
}

function Text36() {
  return (
    <div className="bg-[#f0faf6] h-[19.997px] relative rounded-[2.34146e+07px] shrink-0 w-[38.881px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.997px] relative w-[38.881px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[7.99px] not-italic text-[#5fa895] text-[12px] top-[2px] w-[23px]">Lv.5</p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="absolute content-stretch flex gap-[7.992px] h-[23.987px] items-center left-0 top-0 w-[170.353px]" data-name="Container">
      <Paragraph16 />
      <Text36 />
    </div>
  );
}

function Text37() {
  return (
    <div className="absolute h-[19.997px] left-0 top-[27.98px] w-[54.833px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-neutral-600 top-[0.4px] tracking-[-0.1504px] w-[55px]">🌱 1,980</p>
    </div>
  );
}

function Container65() {
  return (
    <div className="basis-0 grow h-[47.974px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[47.974px] relative w-full">
        <Container64 />
        <Text37 />
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="h-[55.999px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[29.69px] h-[55.999px] items-center pl-[13.695px] pr-0 py-0 relative w-full">
          <Text34 />
          <Container63 />
          <Container65 />
        </div>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[97.388px] items-start left-0 pb-[0.698px] pt-[20.694px] px-[20.694px] rounded-[24px] top-[984.44px] w-[347.728px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.698px] border-neutral-200 border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Container66 />
    </div>
  );
}

function Container68() {
  return (
    <div className="absolute h-[1081.82px] left-[32px] top-[396px] w-[348.02px]" data-name="Container">
      <Container18 />
      <Container25 />
      <Container32 />
      <Container37 />
      <Container42 />
      <Container47 />
      <Container52 />
      <Container57 />
      <Container62 />
      <Container67 />
    </div>
  );
}

export default function DailyKindnessConnectionApp() {
  return (
    <div className="bg-[#fafbfc] relative size-full" data-name="Daily Kindness Connection App (복사)">
      <Container1 />
      <Container7 />
      <Container11 />
      <Container68 />
    </div>
  );
}