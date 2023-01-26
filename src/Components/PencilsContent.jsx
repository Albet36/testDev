import { Discount } from "./Discount";
import { Product } from "./Product";

export const PenCilsContent = () => {
  return (
    <div className="lg:grid lg:grid-cols-3 gap-1 bg-gray-100 mx-5 pr-10">
      {/*content */}
      <div className="pt-10 pl-[37px] pr-10">
        <div className="">
          <div className="text-[21px] font-normal leading-8 mt-[11px]">
            <p>
              Graphite Artist Quality Fine Art Drawing and Sketching Pencils Replaceable Nib Pencils. {" "}
            </p>
          </div>
          <div className="text-[18px] mt-[24px]">
            <ul className="leading-[40px] font-semibold list-disc not-italic list-inside">
              <li>MECHANICAL PENCILS</li>
              <li>ARCHITECT'S CHOICE</li>
            </ul>
            <ul className="leading-[40px] font-semibold list-disc not-italic list-inside">
              <li>EXECUTIVE PENCILS</li>
              <li>ENGRAVABLE PENCILS</li>
            </ul>
          </div>
        </div>
        {/*button */}
      </div>
      <div className="row-start-2 mt-[-61px] ml-[38px]">
        <button className="text-sm  w-[120px] h-[50px] rounded-[5px] bg-[#F4B840] uppercase text-white lg:mt-2.5 lg:pl-[3.7px]">
          shop all
        </button>
      </div>
      <div className="row-span-2 col-span-2 mt-10 px-[3px]">
                {/* discound */}
       <div className="ml-[12px] mb-[1.1rem] "> 
       <Discount />
       </div>
        {/* product item */}
        <div className="mt-[20px] mb-10">
       <Product />
        </div>
      </div>
    </div>
  );
};
