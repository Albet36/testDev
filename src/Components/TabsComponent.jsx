import clsx from "clsx";
import { useState } from "react";
import { PenCilsContent } from "./PencilsContent";
import { PencilsTab } from "./tabs/PencilsTab";

export const TabsComponent = () => {
  const [tabs, setTabs] = useState(1);
  const [dropdown, setDropdown] = useState(true);

  const [dropdownOne, setDropdownOne] = useState(true);
  // const handleTabs = () => {
  //     setTabs(tabs => !tabs);
  // }
  const handleTabs = (index) => {
    setTabs(index);
  };
  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  console.log(tabs);
  return (
    <>
      <div className="lg:mt-[108px] lg:mr-[142px] lg:mb-[50px] lg:ml-[98px]">
        {/*Tabs item */}
        <div className="lg:flex">
          <div className="">
            <div
              onClick={() => handleTabs(1)}
              className={clsx(
                tabs === 1 ? " text-white " : "sm:bg-white",
                dropdown ? "rounded-b-none" : null
              )}>
              <PencilsTab />
            </div>
          </div>
          <div>
            <div
              onClick={() => handleTabs(2)}
              className={clsx(
                tabs === 2 ? " text-white lg:bg-black" : "sm:bg-white",
                dropdown ? "rounded-b-none" : null
              )}>
             
            </div>
          </div>
        </div>
        {/*Tabs Contents */}
        <div>
          <div className={clsx(tabs === 1 ? "block" : "hidden")}><PenCilsContent /></div>
          <div className={clsx(tabs === 2 ? "block" : "hidden")}>content2</div>
        </div>
      </div>
    </>
  );
};
