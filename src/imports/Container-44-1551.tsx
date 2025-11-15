import imgImage20 from "figma:asset/52c4d8b1c03f8770a96dfeeee948c17c65a9603f.png";

function Heading() {
  return (
    <div className="absolute h-[31.99px] left-[31.99px] top-[127.99px] w-[299.731px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[32px] left-[149.85px] not-italic text-[24px] text-center text-neutral-900 text-nowrap top-[-0.6px] tracking-[-0.4297px] translate-x-[-50%] whitespace-pre">기부 완료!</p>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute content-stretch flex h-[20.934px] items-start left-[110.94px] top-[3.49px] w-[62.269px]" data-name="Text">
      <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[28px] not-italic relative shrink-0 text-[#66bb9a] text-[18px] text-center text-nowrap tracking-[-0.4395px] whitespace-pre">그린피스</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[28px] left-[31.99px] top-[171.98px] w-[299.731px]" data-name="Paragraph">
      <Text />
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[28px] left-[181.71px] not-italic text-[18px] text-center text-neutral-700 text-nowrap top-[0.49px] tracking-[-0.4395px] translate-x-[-50%] whitespace-pre">에</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute content-stretch flex h-[20.934px] items-start left-[83.36px] top-[3.49px] w-[39.601px]" data-name="Text">
      <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[28px] not-italic relative shrink-0 text-[#66bb9a] text-[18px] text-center text-nowrap tracking-[-0.4395px] whitespace-pre">1그루</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[28px] left-[31.99px] top-[207.97px] w-[299.731px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[28px] left-[66.16px] not-italic text-[18px] text-center text-neutral-700 text-nowrap top-[0.49px] tracking-[-0.4395px] translate-x-[-50%] whitespace-pre">나무</p>
      <Text1 />
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[28px] left-[188.46px] not-italic text-[18px] text-center text-neutral-700 text-nowrap top-[0.49px] tracking-[-0.4395px] translate-x-[-50%] whitespace-pre">가 기부되었습니다</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[19.997px] left-[16px] top-[11.99px] w-[121.888px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] left-[61.5px] not-italic text-[#66bb9a] text-[14px] text-center text-nowrap top-[0.4px] tracking-[-0.1504px] translate-x-[-50%] whitespace-pre">{` 10,000원의 가치`}</p>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-[#f0f7f4] h-[43.984px] left-[104.91px] rounded-[16px] top-[251.96px] w-[153.878px]" data-name="Container">
      <Paragraph2 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[19.997px] left-[31.99px] top-[319.95px] w-[299.731px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] left-[150.35px] not-italic text-[14px] text-center text-neutral-500 text-nowrap top-[0.4px] tracking-[-0.1504px] translate-x-[-50%] whitespace-pre">따뜻한 마음에 감사드립니다.</p>
    </div>
  );
}

export default function Container1() {
  return (
    <div className="bg-white relative rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] size-full" data-name="Container">
      <Heading />
      <Paragraph />
      <Paragraph1 />
      <Container />
      <Paragraph3 />
      <div className="absolute h-[103px] left-[141px] top-[25px] w-[79px]" data-name="image 20">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img alt="" className="absolute h-[229.08%] left-[-199.42%] max-w-none top-[-61.3%] w-[299.42%]" src={imgImage20} />
          </div>
          <div className="absolute inset-0 overflow-hidden">
            <img alt="" className="absolute h-[229.08%] left-[-199.42%] max-w-none top-[-61.3%] w-[299.42%]" src={imgImage20} />
          </div>
        </div>
      </div>
    </div>
  );
}