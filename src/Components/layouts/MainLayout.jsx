import { useState } from "react";
import { Gallery } from "../Gallery";
import { ScrollToTop } from "../ScrollToTop";
// import Tabs from "../Tabs";
import { TabsComponent } from "../TabsComponent";


export const MainLayout = ({ children }) => {
  const [toggleState, setToggleState] = useState(1);
  
  const toggleTab = (index) => {
    setToggleState(index);
  }
  console.log(toggleState);
  return (
    <div className="to-indigo-50 ">
    <ScrollToTop />
      <div className="sm:px-0">
        <div className="sm:mx-auto sm:bg-white">
          <div className="relative w-full ">
            <div role="tabpanel" className=" transition duration-300 px-[.5px]">
            {toggleState === 1 ?  <TabsComponent /> : null}
            {toggleState === 2 ?  <Gallery /> : null}
            
            </div>
          </div>
        
        </div>
        <div className="flex justify-center my-5">
        {" "}
       <div className="flex">
       <div onClick={() => toggleTab(1)} className={toggleState === 1 ? "transition-opacity ease-in duration-700 opacity-100 hover:opacity-0 cursor-pointer w-5 h-5 rounded-full m-2  bg-black" : "cursor-pointer w-5 h-5 rounded-full m-2 transition bg-gray-500"}>

     </div>
     <div onClick={() => toggleTab(2)} className={toggleState === 2 ? "transition-opacity ease-in duration-700 opacity-100 hover:opacity-0 cursor-pointer w-5 h-5 rounded-full m-2  bg-black" : "cursor-pointer w-5 h-5 rounded-full m-2 transition bg-gray-500"}> 

     </div>
       </div>
      </div>
      </div>
    </div>
  );
};
