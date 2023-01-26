
    
    import clsx from "clsx";
import { useState } from "react";
 import { PenCilsContent } from "../PencilsContent";
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
          <div>
         {/*tab item */}
          <div className="block sm:flex">
          <div className="p-5 mx-1" onClick={() => handleTabs(1)}>one</div>
          
          <div className="p-5 mx-1" onClick={() => handleTabs(2)}>two</div>
          </div>
           {/*tab content */}
          <div>
          <div className={clsx("",tabs === 1 ? "block" : "hidden")}><PenCilsContent /></div>
          <div className={clsx("",tabs === 2 ? "block" : "hidden")}>content two</div>
          </div>
          </div>
        </>
      );
    };
    
