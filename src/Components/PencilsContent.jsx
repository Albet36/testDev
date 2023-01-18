export const PenCilsContent = () => {
  return (
    <div className="grid grid-cols-3 gap-1 bg-gray-100 lg:py-[52px] lg:pl-[50px] lg:mr-[50px] ">
      {/*content */}
      <div className="">
        <div className="">
          <div className="text-[21px] font-normal leading-8">
            <p>
              Graphite Artist Quality Fine Art Drawing and Sketching Pencils Replaceable Nib Pencils. {" "}
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
        {/* discound */}
        {/*button */}
      </div>
      <div className="row-start-2 mt-[6px] ">
        <button className="text-sm mb-[54px]  w-[120px] h-[50px] rounded-[5px] bg-[#F4B840] uppercase text-white lg:mt-6 lg:pl-[3.7px]">
          shop all
        </button>
      </div>
      <div className="row-span-2 col-span-2 relative ">
        <div className="flex border-white border-[2px]  lg:rounded-[18px] mr-12">
          <div className="flex bg-white text-[#F4B840] py-[6px] pl-[41.5px] pr-[27.8px]  leading-10">
            <span className="text-[36px]  lg:font-bold">25%</span>
            <p className="text-[36px] lg:font-bold ml-[12px] mr-[2px]">off</p>
          </div>
          <div className="mt-[8px] mb-[35px]  lg:text-[25px] h-5">
            <p className="ml-[24px] font-light">Offer Applicable on All Our Pencils</p>
          </div>
        </div>
        {/* product item */}
        <div className="pr-[50px] pt-5">
          <div className="grid lg:grid-cols-3 gap-5">
            <div className="bg-white w-[224px] h-[320px] h-full rounded-[18px] ">
              <img src="/product-pen-black.png" className="w-[180px] mx-6 my-[11px]" alt="" />
              <p className="text-center mt-[2px] mb-[6.75px] ml-[14px] mr-[12px] font-medium
 text-sm">
                Aero Mechanical Pencil
              </p>
              {/* price content */}
              <div className="flex ml-[28px] mr-[22px] justify-center leading-7">
                <p className="mr-[10px] font-bold">$99.00</p>
                <span className="line-through text-[#727272] ml-[4px] mt-[4px] font-normal text-sm
 text-sm">$125.00</span>
              </div>
            </div>
            <div className="bg-white w-[224px] h-[320px] h-full rounded-[18px] ">
              <img src="/product-pen-black.png" className="w-[180px] mx-6 my-[11px]" alt="" />
              <p className="text-center mt-[2px] mb-[6.75px] ml-[14px] mr-[12px] font-medium
 text-sm">Castell Mechanical Pencil
              </p>
              {/* price content */}
              <div className="flex ml-[28px] mr-[22px] justify-center leading-7">
                <p className="mr-[10px] font-bold">$75.00</p>
                <span className="line-through text-[#727272] ml-[4px] mt-[4px] font-normal text-sm
 text-sm">$99.00</span>
              </div>
            </div>
            <div className="bg-white w-[224px] h-[320px] h-full rounded-[18px] ">
              <img src="/product-pen-black.png" className="w-[180px] mx-6 my-[11px]" alt="" />
              <p className="text-center mt-[2px] mb-[6.75px] ml-[14px] mr-[12px] font-medium
 text-sm">
                Architect Choice Pencil
              </p>
              {/* price content */}
              <div className="flex ml-[28px] mr-[22px] justify-center leading-7">
                <p className="mr-[10px] font-bold">$45.00</p>
                <span className="line-through text-[#727272] ml-[4px] mt-[4px] font-normal text-sm
 text-sm">$70.00</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
