export const PenCilsContent = () => {
  return (
    <div className="grid grid-cols-3     gap-1 bg-gray-100 lg:py-[40px] lg:pl-[39px] lg:mr-[50px] ">
      {/*content */}
      <div className="">
        <div className="">
          <div className="text-[21px] font-normal leading-8">
            <p>
            Graphite Artist Quality Fine Art Drawing and Sketching Pencils Replaceable Nib Pencils. {" "}
            </p>
          </div>
          <div className="text-[18px] mt-[23px] ml-[18px]">
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
        <div className="row-start-2">
          <button className="font-bold text-[14px] mb-[54px]  w-[120px] h-[50px] rounded-[5px] bg-[#F4B840] uppercase text-white lg:mt-6 ">
            shop all
          </button>
        </div>
      <div className="row-span-2 col-span-2">
        <div className="flex border-white border-[2px] mr-[50px] lg:rounded-[18px] mb-[20px]">
          <div className="flex  text-[#F4B840] lg:bg-white  lg:pl-[96px] lg:pr-[27px] lg:rounded-tl-[18px] lg:rounded-bl-[18px] ">
            <span className="text-[36px]  lg:font-bold">25%</span>
            <p className="text-[36px] lg:font-bold ml-[12px] mr-[2px]">off</p>
          </div>
          <div className="mt-[8px] mr-[72px] mb-[20px] ml-[24px] lg:text-[25px] h-5">
            <p>Offer Applicable on All Our Pencils</p>
          </div>
        </div>
        {/* product item */}
        <div className="pr-[50px]">
          <div className="grid lg:grid-cols-3 gap-5">
            <div className="bg-white w-[180px] h-[320px] h-full rounded-[18px] ">
              <img src="/product-pen-black.png" className="w-full " alt="" />
              <p className="text-center mt-[2px] mb-[6.75px] ml-[13.69px] mr-[9.95px]">
                Aero Mechanical Pencil
              </p>
              {/* price content */}
              <div className="flex ml-[32.76px] mr-[26.69px] justify-center mb-[26.69px]">
                <p className="mr-[7.69px] font-bold">$75.00</p>
                <span className="line-through text-[#727272]">$69.00</span>
              </div>
            </div>
            <div className="bg-white w-[224px] h-[320px] h-full rounded-[18px] ">
            <img src="/product-pen-black.png" className="w-full " alt="" />
            <p className="text-center mt-[2px] mb-[6.75px] ml-[13.69px] mr-[9.95px]">
              Aero Mechanical Pencil
            </p>
            {/* price content */}
            <div className="flex ml-[32.76px] mr-[26.69px] justify-center mb-[26.69px]">
              <p className="mr-[7.69px] font-bold">$75.00</p>
              <span className="line-through text-[#727272]">$69.00</span>
            </div>
          </div>
          <div className="bg-white w-[224px] h-[320px] h-full rounded-[18px] ">
              <img src="/product-pen-black.png" className="w-full " alt="" />
              <p className="text-center mt-[2px] mb-[6.75px] ml-[13.69px] mr-[9.95px]">
                Aero Mechanical Pencil
              </p>
              {/* price content */}
              <div className="flex ml-[32.76px] mr-[26.69px] justify-center mb-[26.69px]">
                <p className="mr-[7.69px] font-bold">$75.00</p>
                <span className="line-through text-[#727272]">$69.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
