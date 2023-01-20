
    
    import clsx from "clsx";
import { useState } from "react";
import { PenCilsContent } from "../PencilsContent";
import {DropUp} from '../../svg/DropUp'
import {DropDown} from '../../svg/DropDown'
import { MarketContent } from "../MarketContent";
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
            <div className="sm:mx-5">
              <div className="">
                {/* start tab 1 */}
                <div
                  className={clsx(
                    "sm:block  cursor-pointer sm:inline-block",
                  )} 
                >
                 {/* Pencils tabs item */}
                 <div className={clsx("bg-gray-100 p-3 lg:pt-[34px] lg:pr-8 lg:pb-[31px] lg:pl-[33px] lg:rounded-t-[25px] lg:mr-5 ",tabs === 1 ? "sm:bg-gray-100" : "sm:bg-transparent")}>
                <div onClick={() =>{handleTabs(1)}} className="bg-white lg:py-[21px] rounded-xl lg:rounded-[0px] shadow-xl">
                    <div className="py-2 rounded-ful flex justify-between lg:block">
                       <div className="flex items-center lg:block ">
                       <div className="bg-gray-100 rounded-full  lg:ml-[85px] lg:mr-[90px] lg:mb-[6px] p-2.5">
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M28.9215 0.3285C28.7105 0.117595 28.4244 -0.00088501 28.1261 -0.00088501C27.8278 -0.00088501 27.5417 0.117595 27.3307 0.3285L23.625 4.03425L31.9657 12.375L35.6715 8.6715C35.7763 8.567 35.8594 8.44285 35.9161 8.30618C35.9728 8.1695 36.002 8.02298 36.002 7.875C36.002 7.72702 35.9728 7.5805 35.9161 7.44382C35.8594 7.30715 35.7763 7.183 35.6715 7.0785L28.9215 0.3285ZM30.375 13.9658L22.0342 5.625L7.40924 20.25H7.87499C8.17336 20.25 8.45951 20.3685 8.67049 20.5795C8.88146 20.7905 8.99999 21.0766 8.99999 21.375V22.5H10.125C10.4234 22.5 10.7095 22.6185 10.9205 22.8295C11.1315 23.0405 11.25 23.3266 11.25 23.625V24.75H12.375C12.6734 24.75 12.9595 24.8685 13.1705 25.0795C13.3815 25.2905 13.5 25.5766 13.5 25.875V27H14.625C14.9234 27 15.2095 27.1185 15.4205 27.3295C15.6315 27.5405 15.75 27.8266 15.75 28.125V28.5908L30.375 13.9658ZM13.572 30.7688C13.5246 30.6429 13.5003 30.5095 13.5 30.375V29.25H12.375C12.0766 29.25 11.7905 29.1315 11.5795 28.9205C11.3685 28.7095 11.25 28.4234 11.25 28.125V27H10.125C9.82662 27 9.54047 26.8815 9.3295 26.6705C9.11852 26.4595 8.99999 26.1734 8.99999 25.875V24.75H7.87499C7.57662 24.75 7.29048 24.6315 7.0795 24.4205C6.86852 24.2095 6.74999 23.9234 6.74999 23.625V22.5H5.62499C5.49049 22.4998 5.35712 22.4754 5.23124 22.428L4.82849 22.8285C4.72128 22.9365 4.63708 23.0651 4.58099 23.2065L0.0809909 34.4565C-0.00084309 34.6609 -0.020876 34.8849 0.0233758 35.1006C0.0676276 35.3164 0.174218 35.5143 0.329933 35.6701C0.485647 35.8258 0.683638 35.9324 0.89936 35.9766C1.11508 36.0209 1.33905 36.0008 1.54349 35.919L12.7935 31.419C12.9349 31.3629 13.0635 31.2787 13.1715 31.1715L13.572 30.771V30.7688Z" fill="#F4B840" />
                            </svg>
                            
                        </div>
                        <p className="my-3 mx-5 capitalize text-black text-[21px] text-center lg:font-black">pencils</p>
                       </div>
                    <div onClick={handleDropdownOne} className="p-5 lg:hidden">
                       {dropdownOne ? <DropUp />:  <DropDown />}
                    </div>
                    </div>
                </div>
            </div>
                </div>
                <div
                  id="content1"
                  className={clsx(
                    "sm:absolute transparent relative  sm:mr-[42px]",
                    tabs === 1 ? "sm:block" : "sm:hidden" 
                    )}
                >
                         <div className={dropdownOne ? "block sm:block" : "hidden sm:block"}>
                         <PenCilsContent />
                         </div>
                 
                </div>
                {/* end tab 1 */}
                {/* start tab 2 */}
                <div
                  className={clsx(
                    "sm:block  cursor-pointer sm:inline-block",
                  )} 
                >
                 {/* Pencils tabs item */}
                 <div className={clsx("bg-gray-100  p-3 lg:pt-[34px] lg:pr-8 lg:pb-[31px] lg:pl-[33px] lg:rounded-t-[25px] sm:mx-5 ",tabs === 2 ? "sm:bg-gray-100" : "sm:bg-transparent")}>
                <div onClick={() =>{handleTabs(2)}} className="bg-white lg:py-[21px] rounded-xl lg:rounded-[0px] shadow-xl">
                    <div className="py-2 rounded-ful flex justify-between lg:block">
                       <div className="flex items-center lg:block ">
                       <div className="bg-gray-100 rounded-full  lg:ml-[85px] lg:mr-[90px] lg:mb-[6px] p-2.5">
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M28.9215 0.3285C28.7105 0.117595 28.4244 -0.00088501 28.1261 -0.00088501C27.8278 -0.00088501 27.5417 0.117595 27.3307 0.3285L23.625 4.03425L31.9657 12.375L35.6715 8.6715C35.7763 8.567 35.8594 8.44285 35.9161 8.30618C35.9728 8.1695 36.002 8.02298 36.002 7.875C36.002 7.72702 35.9728 7.5805 35.9161 7.44382C35.8594 7.30715 35.7763 7.183 35.6715 7.0785L28.9215 0.3285ZM30.375 13.9658L22.0342 5.625L7.40924 20.25H7.87499C8.17336 20.25 8.45951 20.3685 8.67049 20.5795C8.88146 20.7905 8.99999 21.0766 8.99999 21.375V22.5H10.125C10.4234 22.5 10.7095 22.6185 10.9205 22.8295C11.1315 23.0405 11.25 23.3266 11.25 23.625V24.75H12.375C12.6734 24.75 12.9595 24.8685 13.1705 25.0795C13.3815 25.2905 13.5 25.5766 13.5 25.875V27H14.625C14.9234 27 15.2095 27.1185 15.4205 27.3295C15.6315 27.5405 15.75 27.8266 15.75 28.125V28.5908L30.375 13.9658ZM13.572 30.7688C13.5246 30.6429 13.5003 30.5095 13.5 30.375V29.25H12.375C12.0766 29.25 11.7905 29.1315 11.5795 28.9205C11.3685 28.7095 11.25 28.4234 11.25 28.125V27H10.125C9.82662 27 9.54047 26.8815 9.3295 26.6705C9.11852 26.4595 8.99999 26.1734 8.99999 25.875V24.75H7.87499C7.57662 24.75 7.29048 24.6315 7.0795 24.4205C6.86852 24.2095 6.74999 23.9234 6.74999 23.625V22.5H5.62499C5.49049 22.4998 5.35712 22.4754 5.23124 22.428L4.82849 22.8285C4.72128 22.9365 4.63708 23.0651 4.58099 23.2065L0.0809909 34.4565C-0.00084309 34.6609 -0.020876 34.8849 0.0233758 35.1006C0.0676276 35.3164 0.174218 35.5143 0.329933 35.6701C0.485647 35.8258 0.683638 35.9324 0.89936 35.9766C1.11508 36.0209 1.33905 36.0008 1.54349 35.919L12.7935 31.419C12.9349 31.3629 13.0635 31.2787 13.1715 31.1715L13.572 30.771V30.7688Z" fill="#F4B840" />
                            </svg>
                            
                        </div>
                        <p className="my-3 mx-5 capitalize text-black text-[21px] text-center lg:font-black">pencils</p>
                       </div>
                    <div   onClick={handleDropdownTwo} className="p-5 lg:hidden">
                    {dropdownTwo ?  <DropUp /> :  <DropDown />}

                    </div>
                    </div>
                </div>
            </div>
                </div>
                <div
                  id="content1"
                  className={clsx(
                    "sm:absolute transparent relative  sm:mr-[42px]",
                    tabs === 2 ?  "sm:block" : "sm:hidden" 
                     )}
                >
              <div className={dropdownTwo ? "block sm:block" : "hidden sm:block"}>
                 <MarketContent />
                 </div>
                </div>
                {/* end tab 2 */}
             
              </div>
            </div>
          </div>
        </>
      );
    };
    
