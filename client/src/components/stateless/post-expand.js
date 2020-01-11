import React, { useState } from "react";
import { Redirect, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import DialogEdit from "./dialogEdit";
import DialogDelete from "./dialogDelete";

const Post = props => {
  var isData = false;
  console.log("props:-", props);
  var data = [];
  props.props === undefined ? (isData = true) : (data = props.props.data);
  PropTypes.checkPropTypes();
  const [showDialogEdit, setShowDialogEdit] = useState(false);
  const [showDialogDelete, setShowDialogDelete] = useState(false);

  const onclickEdit = () => {
    console.log("edit called");
    setShowDialogEdit(!showDialogEdit);
  };

  const onclickDelete = () => {
    console.log("edit called");
    setShowDialogDelete(!showDialogDelete);
  };
  if (isData) {
    return <Redirect to={"/"} />;
  }

  return (
    <div className="post">
      <div className="container post-expand mt-5">
        <div className="card containet mt-3">
          <div className="row mt-1">
            <div className="col-2">
              <img
                className="img-responsive text-image"
                src={data.url}
                height="80px"
                alt="img"
              ></img>
            </div>

            <div className="col-9 text-box">
              <p className="text-caption">{data.caption}</p>
              <p className="text-desc">{data.desc}</p>
              <p className="text-time">posted a while ago</p>
            </div>

            <div className="col-1">
              <div className="likes-box">
                <i className="fas fa-sort-up m-0"></i>
                <p className="text-likes">{data.likes}</p>
                <i className="fas fa-sort-down"></i>
              </div>
            </div>
          </div>
          <div className="bottom-icon">
            <div>
              <button className="btn icon-btn" onClick={onclickEdit}>
                <i className="fas fa-pencil-alt"></i>
              </button>
            </div>
            <div>
              <button className="btn icon-btn" onClick={onclickDelete}>
                <i className="fas fa-trash-alt"></i>
              </button>
              <DialogEdit
                data={data}
                dialog={showDialogEdit}
                onClick={onclickEdit}
              />
              <DialogDelete
                data={data}
                dialog={showDialogDelete}
                onClick={onclickDelete}
              />
            </div>
          </div>
        </div>
        <NavLink to={"/add"} className="btn red mt-5">
          Add Post
        </NavLink>
      </div>
    </div>
  );
};
export default Post;
