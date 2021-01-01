import React, { useEffect, useContext } from "react";
import { FilesContext } from "../../contexts/FilesContext";
import { UserContext } from "../../contexts/UserContext";
import GoogleOAuth from "../GoogleOAuth/GoogleOAuth";

import "./ProfileButton.scss";

function ProfileButton() {
  
  return (
    <div className="navBar">
      <h2>Photo2Code</h2>
      <GoogleOAuth />
    </div>
  );
}

export default ProfileButton;
