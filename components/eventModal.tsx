import React, { FC } from "react";
import Modal from "react-modal";
import Image from "next/image";

interface ModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  description: string;
  title: string;
  image?: string;
  details: React.ReactNode;
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

const EventModal: FC<ModalProps> = ({
  open,
  setOpen,
  title,
  description,
  image,
  details,
}) => {
  return (
    <Modal isOpen={open} style={customStyles}>
      <div className="w-full flex flex-col text-white items-center p-0">
        {image ? (
          <div
            className="w-full overflow-hidden blur-sm"
            style={{ height: "25vh" }}
          >
            <img src={image} className="w-full" />
          </div>
        ) : null}
        <div className="w-3/4 text-center sm:w-1/2">
          <h1 className="font-dot text-4xl mb-6 mt-6">{title}</h1>
          <p className="font-mono text-left text-l">{description}</p>
          {details}
        </div>
      </div>
    </Modal>
  );
};

export default EventModal;
