import React, { useState } from "react";
import { DialogContent, DialogOverlay } from "@reach/dialog";
import { DeletePost } from "../api/fetch";
import { Redirect } from "react-router-dom";

const DialogDelete = props => {
  const [redirect, setRedirect] = useState(false);
  console.log("delete:-", props.dialog);
  const onClickDelete = async () => {
    const result = DeletePost(props.data._id);
    console.log(result);
    setRedirect(true);
  };

  if (redirect === true) {
    return <Redirect to={"/"} />;
  }
  return (
    <DialogOverlay
      style={{ background: "hsla(0, 100%, 100%, 0.9)" }}
      isOpen={props.dialog}
      className="dialog"
    >
      <DialogContent
        aria-labelledby="res1"
        style={{ boxShadow: "0px 10px 50px hsla(0, 0%, 0%, 0.33)" }}
      >
        <button className="btn icon-btn close" onClick={props.onClick}>
          <span aria-hidden>X</span>
        </button>
        <div className="container">
          <p>Are you sure you want to delete?</p>
          <button className="btn save" onClick={onClickDelete}>
            Confirm
          </button>
          <button className="btn save ml-3" onClick={props.onClick}>
            Cancel
          </button>
        </div>
      </DialogContent>
    </DialogOverlay>
  );
};

export default DialogDelete;
