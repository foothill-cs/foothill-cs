import Link from "next/link";
import React, { MutableRefObject, useEffect, useRef } from "react";
import { IoLogoGithub, IoMdMail } from "react-icons/io";

export default function DotMatrix() {
  // const first = useRef()
  const el = useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>;
  useEffect(() => {
    const ele = el.current;
    ele.addEventListener("mousemove", (ev) => {
      const x =
        (Math.abs(ev.clientX - ele.getBoundingClientRect().x) /
          ele.clientWidth -
          0.5) *
        30;
      const y =
        (Math.abs(ev.clientY - ele.getBoundingClientRect().y) /
          ele.clientHeight -
          0.5) *
        30;
      // console.log(ev.clientX, ev.clientY);
      let transform = `
      
      rotateX(${x}deg)
      rotateY(${y}deg)
      `;
      // ele.style.boxShadow = "5px 5px 20px white";
      ele.style.transform = transform;
      // console.log(transform);

      // console.log(x);
      // console.log(ev.clientX - ele.getBoundingClientRect().x);
    });
    ele.addEventListener("mouseout", (x) => {
      const transform = `

        rotateX(0deg)
        rotateY(0deg)
      `;
      ele.style.transform = transform;
    });
  }, []);
  return (
    <div
      className="text-white  bg-gray-900 p-10 rounded-lg w-full grid grid-cols-2 col-span-2"
      ref={el}
      style={{
        transformOrigin: "preserve-3d",
        transition: "transform 200ms ease-out",
        // transform: "scale(1)",
      }}
    >
      <div className="font-dot text-7xl animate-[pulse_2s] flex flex-col">
        <div>FHS</div>
        <div>CS</div>
        <div>CLUB</div>
        <div style={{ height: "10px", width: "5px" }}></div>
        <div className="flex w-1/2 mt-auto" style={{ gap: "10px" }}>
          <a href="https://github.com/foothill-cs" target={"_blank"}>
            <IoLogoGithub
              // color="white"
              size={30}
              className="text-blue-100 cursor-pointer transition ease-in-out duration-100 hover:scale-150"
            />
          </a>
          <a href="https://github.com/foothill-cs" target={"_blank"}>
            <IoMdMail
              size={30}
              className="text-blue-100 cursor-pointer transition ease-in-out duration-100 hover:scale-150"
            />
          </a>
        </div>
      </div>
      <div className="font-mono italic rot h-10 text-blue-100">
        ©FHSCS 2010-2022
      </div>
    </div>
  );
}
