import React, { useState } from "react";
import LineChart from "./Chart";

const Page = () => {
  const [activeTab, setActiveTab] = useState("Chart");

  return (
    <>
      <div className="bg-[#ffffff] p-10 lg:w-[80%] w-[100%] h-screen text-[13px] ld:text-[16px] md:text-[16px]">
        <div id="price" className="w-full block mb-8">
          <p className="lg:text-[70px] md:text-[50px] text-[30px] text-start relative">
            63,179.71
            <span className="text-[#BDBEBF] lg:text-[24px] md:text-[18px] text-[12px] absolute top-[7px] left-[125px] lg:top-[20px] lg:left-[280px] md:top-[12px] md:left-[200px]">
              USD
            </span>
          </p>
          <p className="text-[#67BF6B]">+ 2,161.42 (3.54%)</p>
        </div>

        <div
          className="w-full flex items-center justify-start gap-5 text-[#6F7177]"
          id="options"
        >
          {["Summary", "Chart", "Statistics", "Analysis", "Settings"].map(
            (option) => (
              <p
                key={option}
                className={`pb-3 cursor-pointer border-b-2   ${
                  activeTab === option
                    ? "border-b-[#4B40EE] text-black"
                    : "border-b-[white]"
                }`}
                onClick={() => setActiveTab(option)}
              >
                {option}
              </p>
            )
          )}
        </div>

        <div
          className="w-full flex items-center justify-start gap-5 text-[#6F7177] mt-7"
          id="options"
        >
          <div className="flex gap-4 ld:gap-36 md:gap-36 flex-col lg:flex-row md:flex-row">
                <div className="flex gap-6">
                    <p className="flex gap-2 items-center"><img src="full.png" alt="no" className="w-[20px] h-[20px]"/>Fullscreen</p>
                    <p className="flex gap-2 items-center"><img src="compare.png" alt="no" className="w-[20px] h-[20px]"/>Compare</p>
                </div>
                <div className="flex gap-6 items-center">
                    <p className="cursor-pointer ">1d</p>
                    <p className="cursor-pointer ">3d</p>
                    <p className="cursor-pointer p-3 py-1 rounded-lg bg-[#4B40EE] text-white">1w</p>
                    <p className="cursor-pointer ">1m</p>
                    <p className="cursor-pointer ">6m</p>
                    <p className="cursor-pointer ">1y</p>
                    <p className="cursor-pointer ">max</p>
                </div>
            </div>
        </div>

        <div id="chart" className="text-[#6F7177] mt-12 w-full">
            <LineChart />
        </div>
      </div>
    </>
  );
};

export default Page;
