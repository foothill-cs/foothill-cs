import React from "react";
import Image from "next/image";

interface props {
  name: string;
  picture: string;
  desc: string;
}

export const Avatar = (props: props) => {
  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="font-mono text-2xl">{props.name}</h1>
      <img src={props.picture} alt="arnav" className="rounded-lg w-full" />
      <p className="font-mono mt-2">{props.desc}</p>
      {/* <Image src="IMG_9362.jpeg" height={20} width={20} /> */}
    </div>
  );
};
