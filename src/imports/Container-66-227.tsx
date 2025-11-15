function Heading() {
  return (
    <div className="absolute content-stretch flex h-[34px] items-start left-[-8px] top-[-1px] w-[227px]" data-name="Heading 2">
      <p className="font-['ABeeZee:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[33.6px] relative shrink-0 text-[24px] text-center text-green-600 w-[240px]" style={{ fontVariationSettings: "'wght' 400" }}>
        매일 맞춤형 미션
      </p>
    </div>
  );
}

function Paragraph() {
  return <div className="absolute h-[25.573px] left-0 top-[33.6px] w-[211.834px]" data-name="Paragraph" />;
}

function Paragraph1() {
  return (
    <div className="absolute h-[51.146px] left-0 top-[34px] w-[211.834px]" data-name="Paragraph">
      <div className="absolute font-['ABeeZee:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[25.6px] left-[111.06px] text-[#6a7282] text-[16px] text-center top-[-0.26px] translate-x-[-50%] w-[186px]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="mb-0">작은 친절 미션을 완료하고</p>
        <p>SEED 🌱를 모아보세요</p>
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="relative size-full" data-name="Container">
      <Heading />
      <Paragraph />
      <Paragraph1 />
    </div>
  );
}