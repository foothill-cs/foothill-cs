import React from "react";

export default function DotMatrix() {
  return (
    <div className="text-white  bg-gray-900 p-10 rounded-lg w-3/5 bg-opacity-90 mt-4 flex justify-between">
      <div className="font-dot text-7xl">
        <div>FHS</div>
        <div>CS</div>
        <div>CLUB</div>
      </div>
      <div className="rotate-90 font-mono">
        <div>©FHSCS 2010-2022</div>
      </div>
    </div>
  );
}
