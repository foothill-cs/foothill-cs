import React, { useEffect, useState } from "react";
import { Divider } from "./divider";
import { IoLogoGithub, IoMdMail } from "react-icons/io";

// import "../styles/Home.module.css";

interface props {
  span: string;
}

export const Faq = (props: props) => {
  const target = "Questions?";
  const [text, setText] = useState("");
  const [done, setDone] = useState(false);
  const tick = () => {
    setDone(text.length == target.length);
    setText(target.substring(0, text.length + 1));
  };
  useEffect(() => {
    let i: any;
    if (!done) {
      i = setInterval(() => {
        tick();
      }, 200);
    }

    return () => {
      clearInterval(i);
    };
  }, [text, done]);

  return (
    <div
      className={`w-full border-gray-300 border-4 rounded-lg ${props.span} font-dot text-white  p-2`}
    >
      <h1 className={`text-3xl ${!done ? "txt" : "other"}`}>{text}</h1>
      <Divider color="bg-slate-400" />
      <p className="font-mono text-lg text-blue-100 ps">
        text text text 
      </p>

      <div className="flex w-1/2 mt-auto" style={{ gap: "10px" }}>
          <a href="https://github.com/foothill-cs" target={"_blank"} rel="noopener noreferrer">
            <IoLogoGithub
              // color="white"
              size={30}
              className="text-blue-100 cursor-pointer transition ease-in-out duration-100 hover:scale-150"
            />
          </a>
          <a href="mailto:foothillcompsciclub@gmail.com" target={"_blank"} rel="noopener noreferrer">
            <IoMdMail
              size={30}
              className="text-blue-100 cursor-pointer transition ease-in-out duration-100 hover:scale-150"
            />
          </a>
        </div>
    </div>
  );
};
