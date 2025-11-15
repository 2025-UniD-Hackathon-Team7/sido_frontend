function Heading() {
  return (
    <div className="absolute content-stretch flex h-[33.599px] items-start left-[9px] top-0 w-[240.494px]" data-name="Heading 2">
      <p className="font-['ABeeZee:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[33.6px] relative shrink-0 text-[24px] text-center text-green-600 w-[259px]" style={{ fontVariationSettings: "'wght' 400" }}>
        작은 시도를 실천하는 앱
      </p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[51.146px] left-[9px] top-[42px] w-[240.494px]" data-name="Paragraph">
      <div className="absolute font-['ABeeZee:Regular','Noto_Sans_KR:Regular',sans-serif] leading-[25.6px] left-[128.4px] text-[#6a7282] text-[16px] text-center top-[-0.26px] translate-x-[-50%] w-[206px]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="mb-0">매일 작은 친절함으로</p>
        <p>세상을 더 따뜻하게 만들어요</p>
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