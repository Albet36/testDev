import { Discount } from "./Discount";
import { Product } from "./Product";

export const MarketContent = () => {
  return (
    <div className="lg:grid lg:grid-cols-3 gap-1 bg-gray-100 lg:p-10">
      {/*content */}
      <div className="">
        <div className="">
          <div className="text-[21px] font-normal leading-8">
            <p>
              Graphite Artist Quality Fine Art Drawing and Sketching Market Replaceable Nib Pencils. {" "}
            </p>
          </div>
          <div className="text-[18px] mt-[24px] ml-[18px]">
            <ul className="leading-[40px] font-black">
              <li>MECHANICAL PENCILS</li>
              <li>ARCHITECT'S CHOICE</li>
            </ul>
            <ul className="leading-[40px] font-black">
              <li>EXECUTIVE PENCILS</li>
              <li>ENGRAVABLE PENCILS</li>
            </ul>
          </div>
        </div>
        {/*button */}
      </div>
      <div className="row-start-2 mt-[6px]">
        <button className="text-sm mb-[54px]  w-[120px] h-[50px] rounded-[5px] bg-[#F4B840] uppercase text-white lg:mt-6 lg:pl-[3.7px]">
          shop all
        </button>
      </div>
      <div className="row-span-2 col-span-2">
                {/* discound */}
        <Discount />
        {/* product item */}
        <div className="pt-5">
       <Product />
        </div>
      </div>
    </div>
  );
};
