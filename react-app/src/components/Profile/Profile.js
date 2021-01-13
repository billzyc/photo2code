import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

import profileIconSVG from "../../assets/svg/profileIcon.svg";
import "./Profile.scss";

function Profile() {
  const { userFirstName } = useContext(UserContext);
  return (
    <div className="profile">
      <img src={profileIconSVG} alt="profile" />
      <p>{userFirstName}</p>
    </div>
  );
}

export default Profile;
