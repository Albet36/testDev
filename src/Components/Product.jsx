export const Product = () => {
    return (
        <div className="flex">
           <div className="w-56 h-80 mx-[10.5px] bg-white pt-2.5 px-[22px] rounded-[18px]">
           <img src="/product-pen-black.png" className="w-[180px] h-[210px]"/>
          <div className="text-center mt-3.5">
          <p className="capitalize font-medium text-sm">aero mechanical pencil</p>
          <div className="flex justify-center mt-[.6rem]">
          <p className="text-base font-bold ml-[1px] mr-[13px]">$99.00</p>
          <span className="text-sm line-through text-[#727272] mt-[.19rem]">$125.00</span>
          </div>
           </div>
           </div>
           <div className="w-56 h-80 mx-[10.5px] bg-white pt-2.5 px-[22px] rounded-[18px]">
           <img src="/product-pen-black.png" className="w-[180px] h-[210px]"/>
          <div className="text-center mt-3.5">
          <p className="capitalize font-medium text-sm">aero mechanical pencil</p>
          <div className="flex justify-center mt-[.6rem]">
          <p className="text-base font-bold ml-[1px] mr-[13px]">$99.00</p>
          <span className="text-sm line-through text-[#727272] mt-[.19rem]">$125.00</span>
          </div>
           </div>
           </div>
        
        </div>
    )
}