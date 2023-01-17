export const PenCilsContent = () => {
    return (

        <div>
            {/*content */}
            <div>
                <div className="pt-[11px] px-[31px] pb-[9px] pr-[37px] text-[16px]">
                    <p>Graphite Artist Quality Fine Art Drawing,Sketching and Replaceable Nib Pencils. </p>

                </div>
                <div className="pl-[20px] pr-[28px] flex justify-between font-bold text-[13px] sm:block">
                    <ul className="list-disc list-inside pr-[10px]">
                                <li>MECHANICAL PENCILS</li>
                                <li>ARCHITECT'S CHOICE</li>
                    </ul>
                    <ul className="list-disc list-inside">
                    <li>EXECUTIVE PENCILS</li>
                    <li>ENGRAVABLE PENCILS</li>
                    </ul>
                </div>
            </div>
            {/* discound */}
            <div className="flex mt-[27px] mx-[30px] mb-[40px] border-2 border-white rounded-[10px]">
                <div className="flex pt-[19px] pl-[24px] mb-[17px] text-[#F4B840]">
                    <span className="text-[36px] font-bold font-normal">25%</span>
                    <p className="text-[18px] font-bold mt-[10px]">OFF</p>
                </div>
                <div className="mt-[22px] mr-[3px] mb-[20px] ml-[16px] text-[16px] h-5 mx-auto">
                    <p>Offer Applicable on All Our Pencils</p>
                </div>
            </div>
            {/* product item */}
           <div>
           <div className="flex justify-center">         
                <div className="bg-white w-auto h-full rounded-[18px] mr-[9px]">
                    <img src="/product-pen-black.png" className="w-full rounded-[18px]" alt="" />
                    <p className="text-center mt-[2px] mb-[6.75px] ml-[13.69px] mr-[9.95px]">Aero Mechanical Pencil</p>
                    {/* price content */}
                    <div className="flex ml-[32.76px] mr-[26.69px] justify-center mb-[26.69px]">
                        <p className="mr-[7.69px]">$75.00</p>
                        <span className="line-through text-[#727272]">$69.00</span>
                    </div>
                </div>
                <div className="bg-white w-auto h-full rounded-[18px] ml-[9px]">
                    <img src="/product-pen-black.png" className="w-full rounded-[18px]" alt="" />
                    <p className="text-center mt-[2px] mb-[6.75px] ml-[13.69px] mr-[9.95px]">Aero Mechanical Pencil</p>
                    {/* price content */}
                    <div className="flex ml-[32.76px] mr-[26.69px] justify-center mb-[26.69px]">
                        <p className="mr-[7.69px]">$75.00</p>
                        <span className="line-through text-[#727272]">$69.00</span>
                    </div>
                </div>
            </div>
            <div className="text-center ">
                <button className="mt-[39px] mb-[60px] w-[100px] h-[40px] rounded-[5px] bg-[#F4B840] uppercase text-white">shop all</button>
            </div>
           </div>
        </div>

    )
}