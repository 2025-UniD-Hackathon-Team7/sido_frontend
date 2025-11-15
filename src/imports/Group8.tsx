import imgImage26 from "figma:asset/9233f9421c53b20f457ade4a4c6a4b66cc48e19c.png";
import imgImage19 from "figma:asset/52c4d8b1c03f8770a96dfeeee948c17c65a9603f.png";

function Group() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute left-0 size-[185px] top-0" data-name="image 26">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage26} />
      </div>
    </div>
  );
}

export default function Group1() {
  return (
    <div className="relative size-full">
      <Group />
      <div className="absolute h-[112px] left-[55px] top-[59px] w-[75px]" data-name="image 19">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[652.23%] left-[-16.19%] max-w-none top-[-364.97%] w-[975.24%]" src={imgImage19} />
        </div>
      </div>
    </div>
  );
}