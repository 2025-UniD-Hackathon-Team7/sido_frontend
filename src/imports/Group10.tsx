import imgImage18 from "figma:asset/f57e80cbd7532dd393b47ef1e13ca6bc324ea24b.png";

function Container() {
  return <div className="absolute bg-[#e0f3fc] left-0 opacity-50 rounded-[4.27707e+07px] size-[185px] top-0" data-name="Container" />;
}

function Group() {
  return (
    <div className="absolute contents left-0 top-0">
      <Container />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-0 top-0">
      <Group />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-0 top-0">
      <Group1 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-0 top-0">
      <Group2 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-0 top-0">
      <Group3 />
      <div className="absolute h-[90.75px] left-[17px] top-[19px] w-[69.191px]" data-name="image 18">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[565.75%] left-[-93.48%] max-w-none top-[-283.98%] w-[742.03%]" src={imgImage18} />
        </div>
      </div>
      <div className="absolute h-[90.75px] left-[101px] top-[43px] w-[69.191px]" data-name="image 19">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[565.75%] left-[-93.48%] max-w-none top-[-283.98%] w-[742.03%]" src={imgImage18} />
        </div>
      </div>
      <div className="absolute h-[90.75px] left-[53px] top-[79px] w-[69.191px]" data-name="image 20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[565.75%] left-[-93.48%] max-w-none top-[-283.98%] w-[742.03%]" src={imgImage18} />
        </div>
      </div>
    </div>
  );
}

export default function Group5() {
  return (
    <div className="relative size-full">
      <Group4 />
    </div>
  );
}
