import React from "react";
import GoogleOAuth from "../GoogleOAuth/GoogleOAuth";

import "./NavBar.scss";

function NavBar() {
  return (
    <div className="navBar">
      <h3>{"<Photo2Code>"}</h3>
      <GoogleOAuth />
    </div>
  );
}

export default NavBar;
