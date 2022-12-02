import React from "react";
// import Image from "next/image";
import { Divider } from "./divider";

export default function Officers() {
  return (
    <div className="text-white p-2 rounded-lg w-full col-span-2 h-full  border-gray-300 border-4 box">
      <h1 className="text-3xl font-dot">Prizes</h1>

      <Divider color="bg-slate-600" />
      <div
        className="text-blue-100 ps font-mono grid place-items-center h-3/4"
        style={{ animationDelay: "0.25s", opacity: 0 }}
      >
        <div className="parental">
          <div className="outer">
            <div className="front">
              <img src="./AMAZON_fp01.png" alt="amazon gift card"/>
            </div>
            <div className="back p-2">
              <p>
                Winners will be receiving Amazon gift cards. 1st place will be given $15, 2nd will be given $10, and 3rd will be given $5.
               </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
