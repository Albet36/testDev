import clsx from "clsx";

export const MarketTab = ({tabs}) => {
  return (
    <>
      <>
        <div className={clsx(" lg:pt-[34px] lg:pr-[2.1rem] lg:pb-[31px] lg:pl-[33px] lg:rounded-t-[25px]",tabs===2 ? "bg-gray-100" : "bg-white")}>
          <div className="bg-white lg:py-[21px] rounded-xl shadow">
            <div className="rounded-xl">
              <div className="lg:bg-gray-100 lg:rounded-full  lg:ml-[86px] mr-[95px] mb-[6px] p-2.5">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.93 0C27.0403 0 26.1842 0.325441 25.5295 0.993451L15.7767 10.9622L25.261 20.6398L35.0306 10.6882C36.3231 9.35214 36.3231 7.19395 35.0306 5.84081L30.2633 0.993451C29.6086 0.325441 28.7693 0 27.93 0ZM14.1652 12.5894L4.16057 22.798C2.85124 24.134 2.85124 26.2922 4.19415 27.6796C2.14622 29.7864 0.0647159 31.8932 -2 34H7.50105L8.94467 32.527C10.254 33.8287 12.3523 33.8116 13.6616 32.4927L23.6495 22.2841"
                    fill="#F4B840"
                  />
                </svg>
              </div>
              <p className="capitalize text-black text-[21px] lg:ml-[76px] lg:mt-[6px] lg:font-black">
                markets
              </p>
            </div>
          </div>
        </div>
      </>
    </>
  );
};
