import React from "react";
import Sidebar from "./../stateless/sidebar";
import Navbar from "./../stateless/navbar";
import Posts from "../stateless/posts";

const feed = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="content ml-2">
        <Posts />
      </div>
    </div>
  );
};

export default feed;
