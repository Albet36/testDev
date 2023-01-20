export const Product = () => {
    return (
        <div className="grid lg:grid-cols-3 gap-1">
            <div className="bg-white w-56 h-80 h-full rounded-[18px]">
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
            <div className="bg-white w-56 h-80 h-full rounded-[18px]">
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
            <div className="bg-white w-56 h-80 h-full rounded-[18px]">
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
           

        </div>
    )
}