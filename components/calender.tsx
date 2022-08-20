import React from "react";
import { Divider } from "./divider";

export const Calender = () => {
  return (
    <div
      className={`w-full border-gray-300 border-4 rounded-lg font-dot text-white p-2 row-span-full flex flex-col justify-between `}
    >
      <div>
        <h1 className="text-3xl">Calender</h1>
        <Divider color="bg-slate-800" />
        <div className="font-mono text-2xl">
          <h1>Events</h1>
          <Divider color={"bg-slate-400"} />
          <ul>
            <li>- Intro meeting (08.26.22)</li>
            <li>- Falconhacks (09.27.22)</li>
          </ul>
        </div>
      </div>

      <div className="mb-10">
        <h1 className="text-2xl font-mono">Next Meeting</h1>
        <Divider color="bg-slate-400" />

        <div className="w-full flex flex-col items-center">
          <p className="text-3xl">August</p>
          <h1 style={{ fontSize: "18vw", lineHeight: 0.8 }}>26</h1>
        </div>
      </div>
    </div>
  );
};
