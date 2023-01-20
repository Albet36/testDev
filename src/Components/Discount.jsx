export const Discount = () => {
    return(
        <div className="flex border-white border-[2px]  lg:rounded-3xl items-baseline mr-9">
          <div className="flex bg-white text-[#F4B840] py-3 px-5  leading-10 lg:rounded-l-[18px] mr-12">
            <span className="text-[30px]  lg:font-bold">25%</span>
            <p className="text-[30px] lg:font-bold mx-3">off</p>
          </div>
          <div className="lg:text-[30px]">
            <p className="font-light">Offer Applicable on All Our Pencils</p>
          </div>
        </div>
    )
}