import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import GoogleOAuth from "../GoogleOAuth/GoogleOAuth";

import "./NavBar.scss";
import Profile from "../Profile/Profile";

function NavBar() {
  const { userEmail, userID } = useContext(UserContext);
  return (
    <div className="navBar">
      <h3>{"<Photo2Code>"}</h3>
      <GoogleOAuth />
    </div>
  );
}

export default NavBar;
