import imgImage16 from "figma:asset/52c4d8b1c03f8770a96dfeeee948c17c65a9603f.png";

function Container() {
  return <div className="absolute bg-[#e0f3fc] left-0 opacity-50 rounded-[4.27707e+07px] size-[185px] top-0" data-name="Container" />;
}

export default function Group() {
  return (
    <div className="relative size-full">
      <Container />
      <div className="absolute h-[111px] left-[50px] top-[37px] w-[85px]" data-name="image 16">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[231.67%] left-[-202.06%] max-w-none top-[-60.63%] w-[302.06%]" src={imgImage16} />
        </div>
      </div>
    </div>
  );
}
