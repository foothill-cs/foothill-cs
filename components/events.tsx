import React from "react";
import { Divider } from "./divider";
import { Link } from "./link";
import { Event } from "./event";
import { events } from "../events";

export const Events = () => {
  return (
    <div
      className={`w-full border-gray-300 border-4 rounded-lg font-dot text-white p-2 justify-between h-full col-span-2 sm:col-span-1`}
    >
      <div>
        <h1 className="text-3xl">Events</h1>
        <Divider color="bg-slate-800" />
        <div
          className="font-mono text-2xl text-blue-100 ps"
          // transform: translateY(10px);
          style={{ animationDelay: "0.5s", opacity: 0 }}
        >
          {/* <h1>Events</h1> */}

          {events.map((x) => {
            return <Event {...x} key={Math.random()} />;
          })}
        </div>
      </div>
    </div>
  );
};
