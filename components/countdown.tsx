import React, { useMemo } from "react";
import { Divider } from "./divider";
import { next_to_next_wed, shortMonth } from "../count_utils";

export const Calendar = () => {
  const date = useMemo(() => next_to_next_wed(), []);

  return (
    <div
      className={`w-full border-gray-300 border-4 rounded-lg font-dot text-white p-2 justify-between col-span-2 sm:col-span-1 `}
    >
      {/* <div> */}
      <div className="w-full mb-10">
        <h1 className="text-3xl font-dot">Countdown</h1>
        <Divider color="bg-slate-500" />

        <div className="w-full flex flex-col items-center disp">
          <h1 style={{ fontSize: "15vw", lineHeight: 0.8 }}>
            {date}
          </h1>
          <p className = "py-4"> </p>
          <p className="text-3xl">Days Left</p>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};
