import React, { Component } from "react";

export default class sidebar extends Component {
  render() {
    return (
      <div className="container sidebar pt-5">
        <div className="sidebtn mt-5">
          <p className="">Home</p>
        </div>
        <div className="sidebtn">
          <p>Explore</p>
        </div>
        <div className="sidebtn">
          <p>/r Subreddits</p>
        </div>
        <div className="sidebtn">
          <p>Messages</p>
        </div>
        <div className="sidebtn">
          <p>Bookmarks</p>
        </div>
        <div className="sidebtn">
          <p>Random</p>
        </div>
        <div className="sidebtn">
          <p>Favourites</p>
        </div>
        <div className="sidebtn">
          <p>Settings</p>
        </div>
      </div>
    );
  }
}
