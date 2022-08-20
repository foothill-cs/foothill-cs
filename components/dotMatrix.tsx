import React from "react";

export default function DotMatrix() {
  return (
    <div className="text-white  bg-gray-900 p-10 rounded-lg w-full grid grid-cols-2 col-span-2">
      <div className="font-dot text-7xl animate-[pulse_2s]">
        <div>FHS</div>
        <div>CS</div>
        <div>CLUB</div>
      </div>
      <div className="font-mono italic rot h-10">©FHSCS 2010-2022</div>
    </div>
  );
}
