import React from "react";
import { Divider } from "./divider";

export const Schedule = () => {
  return (
    <div
      className={`w-full border-gray-300 border-4 rounded-lg font-dot text-white p-2 justify-between h-full col-span-2 sm:col-span-1 box`}
    >
      <div>
        <h1 className="text-3xl">Schedule</h1>
        <Divider color="bg-slate-800" />
        <div
          className="font-mono text-md text-blue-100 ps"
          // transform: translateY(10px);
          style={{ animationDelay: "0.5s", opacity: 0 }}
        >
          <div className="grid grid-cols-2 gap-2">
            <p >9.00 AM SAT</p>
            <p>Opening Ceremony</p>
            <p>2.00 PM SAT</p>
            <p>Studio Heart Engine Workshop</p>
            <p>4.00 PM SAT</p>
            <p>Neural Networks Basics Workshop</p>
            <p>9.00 AM SUN</p>
            <p>Projects are due</p>
            <p>3.00 PM SUN</p>
            <p>Winners are announced</p>
          </div>
        </div>
      </div>
    </div>
  );
};
