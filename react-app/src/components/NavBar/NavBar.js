import React, { useContext } from "react";
import { FilesContext } from "../../contexts/FilesContext";
import { UserContext } from "../../contexts/UserContext";
import GoogleOAuth from "../GoogleOAuth/GoogleOAuth";
import { useCookies } from "react-cookie";

import "./NavBar.scss";

function NavBar() {
  return (
    <div className="navBar">
      <h2>Photo2Code</h2>
      <GoogleOAuth />
    </div>
  );
}

export default NavBar;
