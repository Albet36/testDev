export const Gallery = () => {
    return(
       <div className="p-1">
       <h1 className="font-bold text-center text-[30px] uppercase my-[34px]">Packer pen Gallery</h1>
       <div className="grid grid-cols- grid-row-4 gap-1  place-items-end">
     <img src="/slide-img-1.png" className="w-full   col-start-1 "/>
     <img src="/slide-img-2.png" className="w-full h-full  col-start-1  row-start-2 row-span-2"/>
     <img src="/slide-img-3.png" className="w-full h-full  col-span-2 row-span-1 col-start-2"/>
     <img src="/slide-img-4.png" className="w-full   col-span-2 col-start-2" />
     <img src="/slide-img-5.png" className="w-full   col-start-4 row-start-1" />
     <img src="/slide-img-6.png" className="w-full  col-start-4 row-start-2"  />
     <img src="/slide-img-7.png"  className="w-full  col-start-4 row-start-3"/>
       </div>
       </div>
    )
}