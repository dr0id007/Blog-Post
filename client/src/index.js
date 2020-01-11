import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import "./style/sidebar.css";
import "./style/card.css";
import "./style/navbar.css";
import "./style/post.css";
import "./style/dialog.css";
import "@reach/dialog/styles.css";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.register();
