import { useState } from "react";

const Tabs = () => {
  const [dropdownPencil, setDropdownPencil] = useState(true);
  const [dropdownMarket, setDropdownMarket] = useState(true);
  const handleDropdownPencil = () => {
    setDropdownPencil((dropdownPencil) => !dropdownPencil);
  };
  const handleDropdownMarket = () => {
    setDropdownMarket((dropdownMarket) => !dropdownMarket);
  };
  return (
    <>
      <div className="rounded-full sm:flex">
        {/*dropdown-items */}

        <div className="bg-zinc-200 my-5 p-1 rounded-xl">
          <div className="bg-white rounded-xl">
            <div className="flex justify-between pt-[13px] pb-[17px] pl-[30px] pr-[30px]">
              <div className="flex">
                <div className="bg-zinc-100 p-3 rounded-full">
                  <img className="w-[30px]" src="/pencil.png" />
                </div>
                <span className="font-bold text-[21px] pt-[13px] px-3">
                  Pencils
                </span>
              </div>
              <div onClick={handleDropdownPencil} className="cursor-pointer ">
                {dropdownPencil ? (
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
          <div
            className={
              dropdownPencil ? "p-5 hidden  transition" : "block transition"
            }>
            <div className="p-5 transition">
              <p className="text-[20px] leading-[27px] m-2">
                Graphite Artist Quality Fine Art Drawing, Sketching and
                Replaceable Nib Pencils.
              </p>
              <div className="flex justify-between">
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
            <div className="flex justify-between  rounded-xl px-1 py-[15px]  border border-white mx-[40px]">
              <div className="flex text-amber-400 font-bold">
                <p className="text-[40px]">25% </p>
                <span className="text-[20px] mt-2">OFF</span>
              </div>
              <p className="text-[20px] leading-[24px] mx-10">
                Offer Applicable on All Our Pencils
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 p-5">
              <div className="bg-white rounded-xl">
                <img
                  src="/product-pen-black.png"
                  className="w-full rounded-xl"
                />
                <div className="text-center ">
                  <a href="">
                    <h2 className="font-medium text-[13px] leading-[18px] px-[20px] not-italic">
                      Aero<p>Mechanical Pencil</p>
                    </h2>
                  </a>
                  <div className="flex justify-between px-[50px] font-normal text-[13px] mb-[25px]">
                    <span>$99.00</span>
                    <span className="line-through text-gray-500">$125.00</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl">
                <img src="/product-pen-red.png" className="w-full rounded-xl" />
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
            <div className="text-center my-[60px]">
              <button className="bg-amber-500 text-white w-[100px] h-[50px] rounded-md">
                SHOP ALL
              </button>
            </div>
          </div>
        </div>
        <div className="bg-zinc-200 my-5 p-1 rounded-xl">
        <div className="bg-white rounded-xl">
          <div className="flex justify-between pt-[13px] pb-[17px] pl-[30px] pr-[30px]">
            <div className="flex">
              <div className="bg-zinc-100 p-3 rounded-xl">
                <img className="w-[30px]" src="/pencil.png" />
              </div>
              <span className="font-bold text-[21px] pt-[13px] px-3">
              Market
              </span>
            </div>
            <div onClick={handleDropdownMarket} className="cursor-pointer ">
              {dropdownMarket ? (
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
        <div
          className={
            dropdownMarket ? "p-5 hidden  transition" : "block transition"
          }>
          <div className="p-5 transition">
            <p className="text-[20px] leading-[27px] m-2">
              Graphite Artist Quality Fine Art Drawing, Sketching and
              Replaceable Nib Pencils.
            </p>
            <div className="flex justify-between">
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
          <div className="flex justify-between  rounded-xl px-1 py-[15px]  border border-white mx-[40px]">
            <div className="flex text-amber-400 font-bold">
              <p className="text-[40px]">25% </p>
              <span className="text-[20px] mt-2">OFF</span>
            </div>
            <p className="text-[20px] leading-[24px] mx-10">
              Offer Applicable on All Our Pencils
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 p-5">
            <div className="bg-white rounded-xl">
              <img
                src="/product-pen-black.png"
                className="w-full rounded-xl"
              />
              <div className="text-center ">
                <a href="">
                  <h2 className="font-medium text-[13px] leading-[18px] px-[20px] not-italic">
                    Aero<p>Mechanical Pencil</p>
                  </h2>
                </a>
                <div className="flex justify-between px-[50px] font-normal text-[13px] mb-[25px]">
                  <span>$99.00</span>
                  <span className="line-through text-gray-500">$125.00</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl">
              <img src="/product-pen-red.png" className="w-full rounded-xl" />
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
          <div className="text-center my-[60px]">
            <button className="bg-amber-500 text-white w-[100px] h-[50px] rounded-md">
              SHOP ALL
            </button>
          </div>
        </div>
      </div>
        <div className="bg-zinc-200 my-5 p-1 rounded-xl">
          <div className="bg-white rounded-xl">
            <div className="flex justify-between pt-[13px] pb-[17px] pl-[30px] pr-[30px]">
              <div className="flex">
                <div className="bg-zinc-100 p-3 rounded-xl">
                  <img className="w-[30px]" src="/pencil.png" />
                </div>
                <span className="font-bold text-[21px] pt-[13px] px-3">
                Drawing Colors
                </span>
              </div>
              <div onClick={handleDropdownMarket} className="cursor-pointer ">
                {dropdownMarket ? (
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
          <div
            className={
              dropdownMarket ? "p-5 hidden  transition" : "block transition"
            }>
            <div className="p-5 transition">
              <p className="text-[20px] leading-[27px] m-2">
                Graphite Artist Quality Fine Art Drawing, Sketching and
                Replaceable Nib Pencils.
              </p>
              <div className="flex justify-between">
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
            <div className="flex justify-between  rounded-xl px-1 py-[15px]  border border-white mx-[40px]">
              <div className="flex text-amber-400 font-bold">
                <p className="text-[40px]">25% </p>
                <span className="text-[20px] mt-2">OFF</span>
              </div>
              <p className="text-[20px] leading-[24px] mx-10">
                Offer Applicable on All Our Pencils
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 p-5">
              <div className="bg-white rounded-xl">
                <img
                  src="/product-pen-black.png"
                  className="w-full rounded-xl"
                />
                <div className="text-center ">
                  <a href="">
                    <h2 className="font-medium text-[13px] leading-[18px] px-[20px] not-italic">
                      Aero<p>Mechanical Pencil</p>
                    </h2>
                  </a>
                  <div className="flex justify-between px-[50px] font-normal text-[13px] mb-[25px]">
                    <span>$99.00</span>
                    <span className="line-through text-gray-500">$125.00</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl">
                <img src="/product-pen-red.png" className="w-full rounded-xl" />
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
            <div className="text-center my-[60px]">
              <button className="bg-amber-500 text-white w-[100px] h-[50px] rounded-md">
                SHOP ALL
              </button>
            </div>
          </div>
        </div>
      
      <div className="bg-zinc-200 my-5 p-1 rounded-xl">
      <div className="bg-white rounded-xl">
        <div className="flex justify-between pt-[13px] pb-[17px] pl-[30px] pr-[30px]">
          <div className="flex">
            <div className="bg-zinc-100 p-3 rounded-xl">
              <img className="w-[30px]" src="/pencil.png" />
            </div>
            <span className="font-bold text-[21px] pt-[13px] px-3">
             NoteBook
            </span>
          </div>
          <div onClick={handleDropdownMarket} className="cursor-pointer ">
            {dropdownMarket ? (
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
      <div
        className={
          dropdownMarket ? "p-5 hidden  transition" : "block transition"
        }>
        <div className="p-5 transition">
          <p className="text-[20px] leading-[27px] m-2">
            Graphite Artist Quality Fine Art Drawing, Sketching and
            Replaceable Nib Pencils.
          </p>
          <div className="flex justify-between">
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
        <div className="flex justify-between  rounded-xl px-1 py-[15px]  border border-white mx-[40px]">
          <div className="flex text-amber-400 font-bold">
            <p className="text-[40px]">25% </p>
            <span className="text-[20px] mt-2">OFF</span>
          </div>
          <p className="text-[20px] leading-[24px] mx-10">
            Offer Applicable on All Our Pencils
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 p-5">
          <div className="bg-white rounded-xl">
            <img
              src="/product-pen-black.png"
              className="w-full rounded-xl"
            />
            <div className="text-center ">
              <a href="">
                <h2 className="font-medium text-[13px] leading-[18px] px-[20px] not-italic">
                  Aero<p>Mechanical Pencil</p>
                </h2>
              </a>
              <div className="flex justify-between px-[50px] font-normal text-[13px] mb-[25px]">
                <span>$99.00</span>
                <span className="line-through text-gray-500">$125.00</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl">
            <img src="/product-pen-red.png" className="w-full rounded-xl" />
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
        <div className="text-center my-[60px]">
          <button className="bg-amber-500 text-white w-[100px] h-[50px] rounded-md">
            SHOP ALL
          </button>
        </div>
      </div>
    </div>
      </div>
    </>
  );
};
export default Tabs;
