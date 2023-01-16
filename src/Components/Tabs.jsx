import { useState } from "react";

const Tabs = () => {
  const [dropdownPencil, setDropdownPencil] = useState(5);
  const [pencil, setPencil] = useState(true);
  const handleDropdownPencil = (index) => {
    setDropdownPencil(index);
  };
  const handlePencil = () => {
    setPencil((pencil) => !pencil);
  };
  console.log(pencil);
  return (
    <>
      <div className=" rounded-full lg:flex">
        {/*dropdown-items */}
        <div className="bg-zinc-200 my-5 p-1 rounded-xl lg:mx-2 bg-white">
          {/*list item */}
       
          <div
            className={
              dropdownPencil === 1
                ? "bg-white rounded-xl lg:inline-block lg:bg-gray-100 lg:rounded-none lg:rounded-t-xl"
                : "bg-white rounded-t-xl lg:rounded-t-xl lg:inline-block p-2 border border-8 border-gray-100 lg:border-none"
            }
          >
             <div className="rounded-xl flex justify-between pt-[13px] pb-[17px] pl-[30px] pr-[30px]  ">
              <div
                onClick={() => handleDropdownPencil(1)}
                className="flex lg:block lg:bg-white lg:p-5 lg:rounded-lg lg:shadow"
              >
                <div className="bg-zinc-100  p-3 rounded-full lg:w-[50px] lg:ml-6 ">
                  <img className="w-[30px] " src="/pencil.png" />
                </div>
                <span className="font-bold text-[21px] pt-[13px] px-3 ">
                  Market
                </span>
              </div>
              <div onClick={handlePencil} className="cursor-pointer lg:hidden">
                {pencil ? (
                  <img
                    src="/dropup.png"
                    className="w-[20px] pt-[25px] transition"
                  />
                ) : (
                  <img
                    src="/dropdown.png"
                    className="w-[20px] pt-[25px] transition"
                  />
                )}
              </div>
            </div>
          </div>
          {/*content item */}
          <div
            className={
              dropdownPencil === 1 
                ? "block transition bg-gray-100 lg:grid lg:grid-cols-3"
                : "p-5 hidden  transition"
            }
          >
            <div className="p-5 transition">
              <p className="text-[20px] leading-[27px] m-2">
                Graphite Artist Quality Fine Art Drawing, Sketching and
                Replaceable Nib Pencils.
              </p>
              <div className="flex justify-between lg:block">
                <ul className="list-disc font-bold text-[13px]">
                  <li>MECHANICAL PENCILS </li>
                  <li>ARCHITECT'S CHOICE</li>
                </ul>
                <ul className="list-disc font-bold text-[13px]">
                  <li>EXECUTIVE PENCILS</li>
                  <li>ENGRAVABLE PENCILS</li>
                </ul>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="flex justify-between  rounded-xl px-1 py-[15px]  border border-white mx-[40px] lg:p-0 lg:m-8">
                <div className="flex text-amber-400 font-bold">
                  <p className="text-[40px]">25% </p>
                  <span className="text-[20px] mt-2">OFF</span>
                </div>
                <p className="text-[16px] leading-[24px] mx-10 lg:m-0">
                  Offer Applicable on All Our Pencils
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 p-5 lg:grid-cols-3">
                <div className="bg-white rounded-xl">
                  <img
                    src="/product-pen-black.png"
                    className="w-full rounded-xl"
                  />
                  <div className="text-center">
                    <a href="">
                      <h2 className="font-medium text-[13px] leading-[18px] px-[20px] not-italic">
                        Aero<p>Mechanical Pencil</p>
                      </h2>
                    </a>
                    <div className="flex justify-between px-[50px] font-normal text-[13px] mb-[25px]">
                      <span>$99.00</span>
                      <span className="line-through text-gray-500">
                        $125.00
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl">
                  <img
                    src="/product-pen-black.png"
                    className="w-full rounded-xl"
                  />
                  <div className="text-center">
                    <a href="">
                      <h2 className="font-medium text-[13px] leading-[18px] px-[20px] not-italic">
                        Aero<p>Mechanical Pencil</p>
                      </h2>
                    </a>
                    <div className="flex justify-between px-[50px] font-normal text-[13px] mb-[25px]">
                      <span>$99.00</span>
                      <span className="line-through text-gray-500">
                        $125.00
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl">
                  <img
                    src="/product-pen-red.png"
                    className="w-full rounded-xl"
                  />
                  <div className="text-center ">
                    <a href="">
                      <h2 className="font-medium text-[13px] leading-[18px] px-[20px] not-italic">
                        Castell<p>Mechanical Pencil</p>
                      </h2>
                    </a>
                    <div className="flex justify-between px-[50px] font-normal text-[13px] mb-[25px]">
                      <span>$75.00</span>
                      <span className="line-through text-gray-500">$99.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center my-[60px]">
              <button className="bg-amber-500 text-white w-[100px] h-[50px] rounded-md">
                SHOP ALL
              </button>
            </div>
          </div>
          {/* <div
            className={
              dropdownPencil === 2 || pencil === true
                ? "block transition lg:bg-gray-100 lg:grid lg:grid-cols-3"
                : "p-5 hidden  transition"
            }
          >
            <div className="p-5 transition">
              <p className="text-[20px] leading-[27px] m-2">
                Graphite Artist Quality Fine Art Drawing, Sketching and
                Replaceable Nib Markets.
              </p>
              <div className="flex justify-between lg:block">
                <ul className="list-disc font-bold text-[13px]">
                  <li>MECHANICAL MarketS </li>
                  <li>ARCHITECT'S CHOICE</li>
                </ul>
                <ul className="list-disc font-bold text-[13px]">
                  <li>EXECUTIVE MarketS</li>
                  <li>ENGRAVABLE MarketS</li>
                </ul>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="flex justify-between  rounded-xl px-1 py-[15px]  border border-white mx-[40px] lg:p-0 lg:m-8">
                <div className="flex text-amber-400 font-bold">
                  <p className="text-[40px]">25% </p>
                  <span className="text-[20px] mt-2">OFF</span>
                </div>
                <p className="text-[16px] leading-[24px] mx-10 lg:m-0">
                  Offer Applicable on All Our Markets
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 p-5 lg:grid-cols-3">
                <div className="bg-white rounded-xl">
                  <img
                    src="/product-pen-black.png"
                    className="w-full rounded-xl"
                  />
                  <div className="text-center">
                    <a href="">
                      <h2 className="font-medium text-[13px] leading-[18px] px-[20px] not-italic">
                        Aero<p>Mechanical Market</p>
                      </h2>
                    </a>
                    <div className="flex justify-between px-[50px] font-normal text-[13px] mb-[25px]">
                      <span>$99.00</span>
                      <span className="line-through text-gray-500">
                        $125.00
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl">
                  <img
                    src="/product-pen-black.png"
                    className="w-full rounded-xl"
                  />
                  <div className="text-center">
                    <a href="">
                      <h2 className="font-medium text-[13px] leading-[18px] px-[20px] not-italic">
                        Aero<p>Mechanical Market</p>
                      </h2>
                    </a>
                    <div className="flex justify-between px-[50px] font-normal text-[13px] mb-[25px]">
                      <span>$99.00</span>
                      <span className="line-through text-gray-500">
                        $125.00
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl">
                  <img
                    src="/product-pen-red.png"
                    className="w-full rounded-xl"
                  />
                  <div className="text-center ">
                    <a href="">
                      <h2 className="font-medium text-[13px] leading-[18px] px-[20px] not-italic">
                        Castell<p>Mechanical Market</p>
                      </h2>
                    </a>
                    <div className="flex justify-between px-[50px] font-normal text-[13px] mb-[25px]">
                      <span>$75.00</span>
                      <span className="line-through text-gray-500">$99.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center my-[60px]">
              <button className="bg-amber-500 text-white w-[100px] h-[50px] rounded-md">
                SHOP ALL
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};
export default Tabs;
