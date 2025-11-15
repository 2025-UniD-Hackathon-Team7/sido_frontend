function Heading() {
  return (
    <div className="absolute content-stretch flex h-[33.599px] items-start left-0 top-0 w-[147.702px]" data-name="Heading 2">
      <p className="basis-0 font-['ABeeZee:Regular','Noto_Sans_KR:Regular',sans-serif] grow leading-[33.6px] min-h-px min-w-px relative shrink-0 text-[24px] text-center text-green-600" style={{ fontVariationSettings: "'wght' 400" }}>
        나무 키우기
      </p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[51.146px] left-[-0.01px] top-[33.91px] w-[147.702px]" data-name="Paragraph">
      <div className="absolute font-['ABeeZee:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[25.6px] left-[76.51px] text-[#6a7282] text-[16px] text-center top-[0.09px] translate-x-[-50%] w-[171px]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="mb-0">SEED🌱로 나무를 키우고</p>
        <p>나만의 숲을 가꿔봐요</p>
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="relative size-full" data-name="Container">
      <Heading />
      <Paragraph />
    </div>
  );
}