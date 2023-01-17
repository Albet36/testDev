import clsx from "clsx";
import { useState } from "react"
import { PenCilsContent } from "./PencilsContent";

export const TabsComponent = () => {
    const [tabs,setTabs] = useState(1);
    const [dropdown,setDropdown] = useState(true);

    const [dropdownOne,setDropdownOne] = useState(true);
    // const handleTabs = () => {
    //     setTabs(tabs => !tabs);
    // }
    const handleTabs = (index) => {
        setTabs(index);
    }
    const handleDropdown = () => {
        setDropdown(!dropdown);
    }
   
    console.log(tabs);
    return(
        <>
        <div>
            {/*Tabs item */}
            <div>
                <ul className="block sm:flex">
                    <div className="mb-[10px] sm:mb-0">
                    <li onClick={() => handleTabs(1)} className={clsx("rounded-xl bg-gray-100 p-1 cursor-pointer",tabs === 1 ? " text-white" : "sm:bg-white",dropdown? "rounded-b-none" : null)}>
                        <div className="">
                           <div className="bg-white flex justify-between rounded-xl my-[10px] mx-[11px]">
                           <div className="flex px-[30px] py-[22px] sm:block">
                           <div className="bg-gray-100 rounded-full p-2 w-10 sm:mx-4">
                                <img className="" src="/pencil.png" />
                            </div>
                                <p className="text-black text-[21px] font-bold py-[5px] px-5 sm:px-0">Pencils</p>
                           </div>
                            <div onClick={handleDropdown} className="py-[35px] px-5 sm:hidden">
                                {
                                    dropdown === true && tabs === 1   ? (<img src="/dropup.png" />) 
                                    :  (<img src="/dropdown.png" />)
                                }
                            
                            </div>
                           </div>
                        </div>
                    </li>
                    <div className={clsx("bg-gray-100 p-1 sm:hidden",tabs === 1 && dropdown === true ? "block" : "hidden")}><PenCilsContent /></div>
                   
                    </div>
                    <div className="mb-[10px] sm:mb-0">
                    <li onClick={() => handleTabs(2)} className={clsx("rounded-xl bg-gray-100 p-1 cursor-pointer",tabs === 2 ? " text-white" : "sm:bg-white",dropdown? "rounded-b-none" : null)}>
                        <div className="">
                           <div className="bg-white flex justify-between rounded-xl my-[10px] mx-[11px]">
                           <div className="flex px-[30px] py-[22px] sm:block">
                           <div className="bg-gray-100 rounded-full p-2 w-10 sm:mx-4">
                                <img className="" src="/pencil.png" />
                            </div>
                                <p className="text-black text-[21px] font-bold py-[5px] px-5 sm:px-0">Pencils</p>
                           </div>
                            <div onClick={handleDropdown} className="py-[35px] px-5 sm:hidden">
                                {
                                    dropdown === true && tabs === 2   ? (<img src="/dropup.png" />) 
                                    :  (<img src="/dropdown.png" />)
                                }
                            
                            </div>
                           </div>
                        </div>
                    </li>
                    <div className={clsx("bg-gray-100 p-1 sm:hidden",tabs === 2 && dropdown === true ? "block" : "hidden")}><PenCilsContent /></div>
                   
                    </div>
                  
               </ul>
            </div>
            {/*Tabs content */}
            <div className={clsx("hidden",tabs === 1 ? "bg-gray-100 sm:block" : null)}><PenCilsContent /></div>
                           <div className={clsx("hidden",tabs === 2 ? "bg-gray-100 sm:block" : null)}>Two Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dolores vel ipsam repellendus consequuntur dicta beatae repellat facilis libero voluptate ipsa repudiandae possimus dolorum, impedit rerum? Ex accusantium vel numquam?</div>
                         <div className={clsx("hidden",tabs === 3 ? "sm:block" : null)}>Three Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum asperiores iusto aspernatur ad sit nisi tempora illum suscipit? Quos nulla amet suscipit nisi quo sint unde quibusdam odio tenetur esse!</div>               
            <div>
            </div>
        </div>
        </>
    )
}