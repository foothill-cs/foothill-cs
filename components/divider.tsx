import React from "react";

interface props {
  color: string;
}
export const Divider = (props: props) => {
  return (
    <div className={`h-1 w-1/12 mb-2 mt-2 ${props.color}`}></div>

    // <div>divider</div>
  );
};
