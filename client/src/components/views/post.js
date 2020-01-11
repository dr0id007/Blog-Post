import React from "react";
import PostExpand from "../stateless/post-expand";
import Navbar from "../stateless/navbar";

const post = props => {
  console.log("asdff", props);
  return (
    <div className="gray">
      <div className="gray">
        <Navbar />
      </div>
      <PostExpand props={props.location.Props} />
    </div>
  );
};

export default post;
