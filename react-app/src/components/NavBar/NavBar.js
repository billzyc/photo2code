import React, { useEffect, useContext } from "react";
import { FilesContext } from "../../contexts/FilesContext";
import { UserContext } from "../../contexts/UserContext";
import GoogleOAuth from "../GoogleOAuth/GoogleOAuth";

import "./NavBar.scss";

function NavBar() {
  const { email, updateUserContext } = useContext(UserContext);
  const { files, updateFiles } = useContext(FilesContext);
  
  return (
    <div className="navBar">
      <h2>Photo2Code</h2>
      <GoogleOAuth />
    </div>
  );
}

export default NavBar;
