import React, { useState } from "react";
import { DialogContent, DialogOverlay } from "@reach/dialog";
import { EditPost } from "../api/fetch";
import { Redirect } from "react-router-dom";

const DialogEdit = props => {
  const [dataCaption, setdataCaption] = useState(props.data.caption);
  const [dataDesc, setdataDesc] = useState(props.data.desc);
  const [dataImg, setdataImg] = useState(props.data.url);
  const [redirect, setRedirect] = useState(false);

  const valueChangeCaption = e => {
    setdataCaption(e.target.value);
  };
  const valueChangeDesc = e => {
    setdataDesc(e.target.value);
  };
  const valueChangeImg = e => {
    setdataImg(e.target.value);
  };

  const onsave = async () => {
    const result = await EditPost(
      props.data._id,
      dataCaption,
      dataDesc,
      dataImg
    );
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
          <span aria-hidden>×</span>
        </button>
        <div className="container">
          <div className="row">
            <p>Caption</p>
            <div className="col-12">
              <div className="form-group">
                <input
                  className="form-control"
                  value={dataCaption}
                  onChange={valueChangeCaption}
                />
              </div>
            </div>
            <p>Description</p>
            <div className="col-12">
              <div className="form-group">
                <textarea
                  className="form-control"
                  value={dataDesc}
                  onChange={valueChangeDesc}
                />
              </div>
            </div>
            <p>Image</p>
            <div className="col-12">
              <div className="form-group">
                <input
                  className="form-control"
                  value={dataImg}
                  onChange={valueChangeImg}
                />
              </div>
            </div>
          </div>
          <div className="">
            <button className="btn save" onClick={onsave}>
              Save
            </button>
          </div>
        </div>
      </DialogContent>
    </DialogOverlay>
  );
};

export default DialogEdit;
