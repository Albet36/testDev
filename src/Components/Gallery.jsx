export const Gallery = () => {
    return (
        <div className="mx-[30px] mt-[45px] mb-[35px]">
            <p className="font-extrabold text-center text-[42.5px] ">PACKER PEN GALLERY</p>
          
 <div class="flex flex-row space-x-2">
    {/* <!-- First Col --> */}
    <div class="flex w-[50%] flex-col space-y-4 mt-[78px]">
    <div class=""><img src="/slide-img-1.png" className="w-full" alt="" /></div>
    <div class=""><img src="/slide-img-2.png" className="w-full" alt="" /></div>
    </div>
    {/* <!-- Sec Col --> */}
    <div class="flex w-full flex-col space-y-4  mt-7">
      <div class=""><img src="/slide-img-3.png" className="w-full" alt="" /></div>
      <div class=""><img src="/slide-img-4.png" className="w-full" alt="" /></div>
    </div>
    {/* <!-- Third Col --> */}
    <div class="flex w-[50%] flex-col space-y-4 mt-[80px] p-2">
    <div class=""><img src="/slide-img-5.png" className="object-cover w-full h-[119px] rounded-lg" alt="" /></div>
    <div class=""><img src="/slide-img-6.png" className="w-full" alt="" /></div>
    <div class=""><img src="/slide-img-7.png" className="w-full" alt="" /></div>
    </div>
  </div>
        </div>
    )
}