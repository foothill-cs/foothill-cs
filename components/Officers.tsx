import React from "react";
import { Avatar } from "./Avatar";
import { Divider } from "./divider";

export default function Officers() {
  return (
    <div className="text-white p-2 rounded-lg w-full col-span-2 h-full  border-gray-300 border-4">
      <h1 className="text-3xl font-dot">Officers</h1>

      <Divider color="bg-slate-600" />
      <div
        className="grid grid-cols-2 gap-4 sm:grid-cols-4 text-blue-100 ps"
        style={{ animationDelay: "0.25s", opacity: 0 }}
      >
        <Avatar
          name={"Arnav"}
          desc="President"
          picture="https://avatars.dicebear.com/api/identicon/hskjdhdsdkls.svg"
        />
        <Avatar
          name={"Keerthi"}
          desc="Vice President"
          picture="https://avatars.dicebear.com/api/identicon/hskjwdsdkls.svg"
        />
        <Avatar
          name={"Adi"}
          desc="Treasurer"
          picture="https://avatars.dicebear.com/api/identicon/sdfj.svg"
        />
        <Avatar
          name={"Arav"}
          desc="Secretary"
          picture="https://avatars.dicebear.com/api/identicon/hfjdh.svg"
        />
      </div>
    </div>
  );
}
