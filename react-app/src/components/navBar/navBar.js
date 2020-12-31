import React, { useState } from "react";
import GoogleOAuth from "../googleOAuth/googleOAuth";

import "./navBar.scss";

function NavBar() {
  return (
    <div className="navBar">
      <h2>Photo2Code</h2>
      <GoogleOAuth />
    </div>
  );
}

export default NavBar;
