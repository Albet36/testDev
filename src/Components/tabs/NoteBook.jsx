import clsx from "clsx";

export const NoteBookTab = ({tabs}) => {
  return (
    <>
      <div className={clsx("lg:pt-[34px] lg:pr-[2.1rem] lg:pb-[31px] lg:pl-[33px] lg:rounded-t-[25px]",tabs === 4 ? "bg-gray-100 " : "bg-white")}>
        <div className="bg-white lg:py-[21px] shadow rounded-xl">
          <div className="rounded-xl">
            <div className="lg:bg-gray-100 lg:rounded-full  lg:ml-[86px] mr-[95px] mb-[6px] p-2.5">
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 2V29M3 2H19.5C20.2956 2 21.0587 2.31607 21.6213 2.87868C22.1839 3.44129 22.5 4.20435 22.5 5V23C22.5 23.7956 22.1839 24.5587 21.6213 25.1213C21.0587 25.6839 20.2956 26 19.5 26H3C2.60218 26 2.22064 25.842 1.93934 25.5607C1.65804 25.2794 1.5 24.8978 1.5 24.5V3.5C1.5 3.10218 1.65804 2.72064 1.93934 2.43934C2.22064 2.15804 2.60218 2 3 2V2Z"
                  stroke="#F4B840"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <p className="capitalize text-black text-[21px] lg:ml-[60px] lg:mt-[6px] lg:font-black">
            notebooks
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
