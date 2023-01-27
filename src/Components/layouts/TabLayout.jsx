
    
    import clsx from "clsx";
import { useState } from "react";
 import { PenCilsContent } from "../PencilsContent";
import { DrawingTab } from "../tabs/Drawing";
import { MarketTab } from "../tabs/MarketTab";
import { NoteBookTab } from "../tabs/NoteBook";
import { PenCilsTab } from "../tabs/PencilsTab";
// import {DropUp} from '../../svg/DropUp'
// import {DropDown} from '../../svg/DropDown'
// import { MarketContent } from "../MarketContent";
    export const TabComponent = () => {
      const [tabs, setTabs] = useState(1);
      const [dropdownOne,setDropdownOne] = useState(false);
      const [dropdownTwo,setDropdownTwo] = useState(false);
      const handleTabs = (index) => {
        setTabs(index);
      };
      const handleDropdownOne = () => {
        setDropdownOne(!dropdownOne)
      }
      const handleDropdownTwo = () => {
        setDropdownTwo(!dropdownTwo)
      }
      console.log(tabs);
      return (
        <>
          <div className="pl-[19.5rem] pr-[23rem]">
         {/*tab item */}
          <div className="block sm:flex mx-5 justify-between">
          <div>
          <div className="" onClick={() => handleTabs(1)}><PenCilsTab tabs={tabs} /></div>
          <div className={clsx("block sm:hidden",tabs === 1 ? "block" : "hidden")}><PenCilsContent /></div>
          </div>
          <div>
          <div className="" onClick={() => handleTabs(2)}><MarketTab tabs={tabs} /></div>
          <div className={clsx("block sm:hidden",tabs === 1 ? "block" : "hidden")}><PenCilsContent /></div>
          </div>
          <div>
          <div className="" onClick={() => handleTabs(3)}><DrawingTab tabs={tabs} /></div>
          <div className={clsx("block sm:hidden",tabs === 1 ? "block" : "hidden")}><PenCilsContent /></div>
          </div>
          <div>
          <div className="" onClick={() => handleTabs(4)}><NoteBookTab tabs={tabs}  /></div>
          <div className={clsx("block sm:hidden",tabs === 1 ? "block" : "hidden")}>sadasdasd</div>
          </div>
        
          
          </div>
           {/*tab content */}
          <div className="pl-5 pr-[0.9rem]">
          <div className={clsx("hidden",tabs === 1 ? "sm:block" : "sm:hidden")}><PenCilsContent /></div>
          <div className={clsx("hidden",tabs === 2 ? "sm:block" : "sm:hidden")}><PenCilsContent /></div>

          <div className={clsx("hidden",tabs === 3 ? "sm:block" : "sm:hidden")}><PenCilsContent /></div>

          <div className={clsx("hidden ",tabs === 4 ? "sm:block" : "sm:hidden")}>content two</div>
          </div>
          </div>
        </>
      );
    };
    
