export const Gallery = () => {
    return(
       <div className="p-1">
       <h1 className="font-bold text-center text-[30px] uppercase my-[34px]">Packer pen Gallery</h1>
       <div className="grid grid-cols-3 gap-1">
    <div className="place-self-end">
    <img src="/slide-img-1.png" className="row-start-1"/>
    </div>
   <div className="place-self-end">
   <img src="/slide-img-2.png" className="" />
   </div>
    <div className="col-span-1 col-start-2 row-start-1 w-full h-full">
    <img src="/slide-img-3.png" className="w-full h-full "/>
    </div>
     <div className="col-span-1 col-start-2 row-start-2 w-full h-full">
     <img src="/slide-img-4.png" className="" />
     </div>
     <div className="col-start-3 row-start-1  place-self-start">
     <img src="/slide-img-5.png" className="object-cover w-[291px] h-[119px] rounded-xl " />
     </div>
    <div className="">
    <img src="/slide-img-6.png" className=" "  />
    </div>
<div className="col-start-3">
<img src="/slide-img-7.png"  className="  "/>
</div>
       </div>
       </div>
    )
}