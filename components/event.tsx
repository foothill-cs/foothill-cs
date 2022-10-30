import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";
import Modal from "react-modal";
import { IoIosClose } from "react-icons/io";

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
const customStyles: Modal.Styles = {
  content: {
    backgroundColor: "black",
    height: "90vh",
    padding: "0px",
    // height: "auto",
  },
  overlay: {
    backgroundColor: "#2222229c",
    height: "100%",
  },
};
export const Event: FC<EventProps> = (props) => {
  const { query } = useRouter();
  const [open, setOpen] = useState(query.event === props.id);
  useEffect(() => {
    if (open) {
      // @ts-ignore
      window.scrollTo(top!);
      document.body.classList.add("hid");
    } else {
      document.body.classList.remove("hid");
    }
  }, [open]);
  function toggle() {
    setOpen(!open);
  }

  return (
    <div
      className={"rounded-md hover:animate-pulse"}
      style={{
        cursor: props.modal ? "pointer" : "default",
      }}
    >
      <div onClick={toggle}>{props.children}</div>
      {props.modal ? (
        <Modal
          isOpen={open}
          style={customStyles}
          onRequestClose={toggle}
          shouldCloseOnOverlayClick={true}
        >
          <button
            className="opacity-60 absolute z-100 text-slate-100 bg-red-400 rounded-sm hover:opacity-100"
            style={{
              bottom: "10px",
              right: "10px",
            }}
            onClick={() => {
              toggle();
            }}
          >
            <IoIosClose
              size={30}
              className="hover:rotate-90"
              style={{
                transition: "all ease-in-out 0.2s",
              }}
            />
          </button>
          <div className="w-full flex flex-col text-white items-center p-0">
            {props.image ? (
              <div
                className="w-full overflow-hidden blur-sm"
                style={{ height: "25vh" }}
              >
                <img src={props.image} className="w-full" />
              </div>
            ) : null}
            <div className="w-3/4 text-center sm:w-1/2">
              <h1 className="font-dot text-4xl mb-6 mt-6">{props.title}</h1>
              <p className="font-mono text-left text-l">{props.desc}</p>
              {props.details}
            </div>
          </div>
        </Modal>
      ) : null}
    </div>
  );
};
