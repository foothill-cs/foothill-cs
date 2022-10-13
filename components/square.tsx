import React, { useEffect, useState } from "react";
import { Divider } from "./divider";
import NextLink from "next/link";
import { Link } from "./link";
// import "../styles/Home.module.css";

interface props {
  span: string;
}

export const Square = (props: props) => {
  const target = "Who are we?";
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
        We are the Foothill High School Science Club. We are a group of students
        interested in learning more about cs while fotering a creative and
        inclusive environment. In this club we try to explore the numerous
        applications of computer science. We focus on providing the resources
        for even the least experienced students. Our only requirement is an
        interst in CS and being a current Foothill High School student. This
        year our plans include to have cs related projects for people to work
        on. Also we plan to hold{" "}
        <Link href="/falconhacks" text="falconhacks" blank={false} /> which is a
        fun 24 hr long hackathon held virtually this semester. To join please
        fill out this{" "}
        <Link href="https://forms.gle/WJJM3Nm7o2AZT1ys9" text="form" blank />.
      </p>
    </div>
  );
};
