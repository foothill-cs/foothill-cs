import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";
import EventModal from "./eventModal";

export interface EventProps {
  children: React.ReactNode;
  modal: boolean;
  desc?: string;
  image?: string;
  title?: string;
  id: string;
  // init?: boolean;
  details?: React.ReactNode;
}

export const Event: FC<EventProps> = (props) => {
  const { query } = useRouter();
  const [open, setOpen] = useState(query.event === props.id);
  useEffect(() => {
    console.log("running");
    if (open) {
      // @ts-ignore
      window.scrollTo(top!);
      document.body.classList.add("hid");
    } else {
      document.body.classList.remove("hid");
    }
  }, [open]);

  return (
    <div
      onClick={() => {
        setOpen(!open);
      }}
      className={"rounded-md hover:animate-pulse"}
      style={{
        cursor: props.modal ? "pointer" : "default",
      }}
    >
      {props.children}
      {props.modal ? (
        <EventModal
          open={open}
          setOpen={setOpen}
          description={props.desc!}
          image={props.image}
          title={props.title!}
          details={props.details!}
        />
      ) : null}
    </div>
  );
};
