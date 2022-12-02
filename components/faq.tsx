import React, { useEffect, useState } from "react";
import { Divider } from "./divider";
import { IoLogoGithub, IoMdMail } from "react-icons/io";
import { Link } from "./link";

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
      className={`w-full border-gray-300 border-4 rounded-lg ${props.span} font-dot text-white  p-2 box`}
    >
      <h1 className={`text-3xl ${!done ? "txt" : "other"}`}>{text}</h1>
      <Divider color="bg-slate-400" />
      <p className="font-mono text-lg text-blue-100 ps">
        <p className="italic text-blue-300">
          What skill level do you have to be to participate?
        </p>
        <p>
          We encourage anyone interested to participate regardless of skill
          level.
        </p>
        <p className="italic text-blue-300">
          I don't have a team. Can I still participate?
        </p>
        <p>
          Yes, either you can submit individually or we can help provide help
          introduce you to other participants at a similar skill level.
        </p>
        <p className="italic text-blue-300">How will submissions be handled?</p>
        <p>
          We will be accepting a github project link from each team with a
          commit history. We expect that all code written for the project be
          written during the competition. Failure to do so will result in
          disqualification.{" "}
        </p>
        <p className="mt-2">
          If you have any further questions please email them to us at{" "}
          <Link
            href="mailto://foothillcompsciclub@gmail.com"
            text="foothillcompsciclub@gmail.com"
            blank={false}
          />
        </p>
      </p>
    </div>
  );
};
