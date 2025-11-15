function Paragraph() {
  return (
    <div className="content-stretch flex h-[19.998px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-600">완료 보상</p>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[27.995px] relative shrink-0 w-[27.468px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[27.995px] items-start relative w-[27.468px]">
        <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[20px] text-neutral-950">🌱</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[15.993px] relative shrink-0 w-[27.534px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.993px] items-start relative w-[27.534px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] text-neutral-600 text-nowrap whitespace-pre">SEED</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[7.997px] h-[27.995px] items-center relative shrink-0 w-full" data-name="Container">
      <Text />
      <Text1 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[32px] left-0 text-[#bb4d00] text-[24px] top-[-2.84px] w-[44px]">+15</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] box-border content-stretch flex flex-col gap-[7.997px] h-[99.978px] items-start left-0 pb-0 pt-[15.993px] px-[15.993px] rounded-[16.4px] top-0 w-[141.634px]" data-name="Container">
      <Container />
      <Paragraph1 />
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[27.995px] relative shrink-0 w-[27.468px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[27.995px] items-start relative w-[27.468px]">
        <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[20px] text-neutral-950">⚡</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[15.993px] relative shrink-0 w-[36.005px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.993px] items-start relative w-[36.005px]">
        <p className="basis-0 font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[12px] text-neutral-600">경험치</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[7.997px] h-[27.995px] items-center relative shrink-0 w-full" data-name="Container">
      <Text2 />
      <Text3 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[32px] left-0 text-[#8200db] text-[24px] top-[-2.84px] w-[44px]">+20</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] box-border content-stretch flex flex-col gap-[7.997px] h-[99.978px] items-start left-[153.62px] pb-0 pt-[15.993px] px-[15.993px] rounded-[16.4px] top-0 w-[141.634px]" data-name="Container">
      <Container2 />
      <Paragraph2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[99.978px] relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Container3 />
    </div>
  );
}

export default function Container5() {
  return (
    <div className="relative rounded-[16px] size-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.843px] border-[rgba(254,230,133,0.5)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[15.993px] items-start pb-[0.843px] pt-[24.833px] px-[24.833px] relative size-full">
          <Paragraph />
          <Container4 />
        </div>
      </div>
    </div>
  );
}