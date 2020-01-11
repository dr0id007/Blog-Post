import React from "react";
import { NavLink } from "react-router-dom";

const Card = data => {
  return (
    <div className="card containet mt-3">
      <div className="row mt-1">
        <div className="col-2">
          <img
            className="img-responsive text-image"
            src={data.data.url}
            height="80px"
            alt="img"
          ></img>
        </div>
        <div className="col-9">
          <NavLink to={{ pathname: "/post", Props: data }}>
            <p className="text-caption">{data.data.caption}</p>
            <p className="text-desc">{data.data.desc}</p>
            <p className="text-time">posted a while ago</p>
          </NavLink>
        </div>

        <div className="col-1">
          <div className="likes-box">
            <i className="fas fa-sort-up m-0"></i>
            <p className="text-likes">{data.data.likes}</p>
            <i className="fas fa-sort-down"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
