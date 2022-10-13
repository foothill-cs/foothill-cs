import React from "react";
import { Divider } from "./divider";

export const Schedule = () => {
  return (
    <div
      className={`w-full border-gray-300 border-4 rounded-lg font-dot text-white p-2 justify-between h-full col-span-2 sm:col-span-1`}
    >
      <div>
        <h1 className="text-3xl">Schedule</h1>
        <Divider color="bg-slate-800" />
        <div
          className="font-mono text-2xl text-blue-100 ps"
          // transform: translateY(10px);
          style={{ animationDelay: "0.5s", opacity: 0 }}
        >
          {/* <h1>Events</h1> */}
          <ul>
          </ul>
        </div>
      </div>
    </div>
  );
};
