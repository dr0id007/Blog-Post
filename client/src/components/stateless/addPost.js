import React, { useState } from "react";
import { AddPost } from "../api/fetch";
import { Redirect } from "react-router-dom";

const DialogEdit = () => {
  const [dataCaption, setdataCaption] = useState("");
  const [dataDesc, setdataDesc] = useState("");
  const [dataImg, setdataImg] = useState("");
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
    console.log(dataCaption, dataDesc, dataImg);
    const result = await AddPost(dataCaption, dataDesc, dataImg);
    console.log(result);
    setRedirect(true);
  };

  if (redirect === true) {
    return <Redirect to={"/"} />;
  }

  return (
    <div>
      <button className="btn icon-btn close">
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
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default DialogEdit;
