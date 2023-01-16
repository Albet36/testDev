export const Gallery = () => {
    return(
       <div className="p-1">
       <h1 className="font-bold text-center text-[30px] uppercase my-[34px]">Packer pen Gallery</h1>
       <div className="grid grid-cols-2 gap-1 sm:grid-cols-5">
     <img src="/slide-img-1.png" className="w-full"/>
     <img src="/slide-img-3.png" className="row-span-2 h-full object-cover  w-full"/>
     <img src="/slide-img-2.png" className="w-full"/>
     <img src="/slide-img-4.png" className="col-span-2 w-full sm:row-span-5" />
     <img src="/slide-img-5.png" className="col-span-2 w-full sm:row-span-5" />
     <img src="/slide-img-6.png" className="w-full"  />
     <img src="/slide-img-7.png"  className="w-full"/>
       </div>
       </div>
    )
}