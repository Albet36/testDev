export const Gallery = () => {
    return (
        <div className="ml-[330px] mr-[390px]  mt-[10px] mb-[3px]">
            <p className="font-extrabold text-center text-[45px] mt-8">PACKER PEN GALLERY</p>
          
 <div className="flex flex-row space-x-4  py-50 mt-3">
    {/* <!-- First Col --> */}
    <div className="flex w-[50%] flex-col space-y-3  mt-[78px]">
    <div className=""><img src="/slide-img-1.png" className="w-full" alt="" /></div>
    <div className=""><img src="/slide-img-2.png" className="w-full" alt="" /></div>
    </div>
    {/* <!-- Sec Col --> */}
    <div className="flex w-full flex-col space-y-3 mt-7">
      <div className=""><img src="/slide-img-3.png" className="w-full" alt="" /></div>
      <div className=""><img src="/slide-img-4.png" className="w-full" alt="" /></div>
    </div>
    {/* <!-- Third Col --> */}
    <div className="flex w-[50%] flex-col space-y-3 mt-[75px] ">
    <div className=""><img src="/slide-img-5.png" className="object-cover w-full h-[119px] rounded-lg" alt="" /></div>
    <div className=""><img src="/slide-img-6.png" className="w-full" alt="" /></div>
    <div className=""><img src="/slide-img-7.png" className="w-full" alt="" /></div>
    </div>
  </div>
        </div>
    )
}