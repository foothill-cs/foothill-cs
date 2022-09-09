import React from "react";
import { Divider } from "./divider";

export const Events = () => {
  return (
    <div
      className={`w-full border-gray-300 border-4 rounded-lg font-dot text-white p-2  justify-between grid grid-cols-2 h-full col-span-2 sm:col-span-1`}
    >
      <div>
        <h1 className="text-3xl">Events</h1>
        <Divider color="bg-slate-800" />
        <div className="font-mono text-2xl text-blue-100">
          {/* <h1>Events</h1> */}
          <ul>
            <li>- Intro meeting (08.26.22)</li>
            <li>- Falconhacks (09.27.22)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
