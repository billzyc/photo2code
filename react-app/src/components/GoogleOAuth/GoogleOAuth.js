import React, { useContext } from "react";
import GoogleLogin from "react-google-login";
import { useCookies } from "react-cookie";

import "./GoogleOAuth.scss";
import { UserContext } from "../../contexts/UserContext";
import getUserInformation from "../../utils/getUserInformation";
import { FilesContext } from "../../contexts/FilesContext";

function GoogleOAuth() {
  const [cookies, setCookie] = useCookies(["token"]);
  const { updateUserContext } = useContext(UserContext);
  const { updateFiles } = useContext(FilesContext);

  const clientId =
    "681258670642-cdmnl2u2f679khc07railjprdct59n66.apps.googleusercontent.com";

  const onSuccess = async (response) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ gToken: response.tokenId }),
    };

    const apiResponse = await fetch(
      "http://127.0.0.1:5000/googleSignin",
      requestOptions
    );

    const data = await apiResponse.json();

    let expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 16);
    //TODO: add secure for cookies after site is hosted
    setCookie("token", data.token, {
      path: "/",
      expires: expirationDate,
      sameSite: true,
    });

    getUserInformation(data.token, updateUserContext, updateFiles);
  };

  const onFail = () => {
    console.log("failed!");
  };

  return (
    <GoogleLogin
      className="login-button"
      clientId={clientId}
      buttonText="login!"
      onSuccess={onSuccess}
      onFailure={onFail}
      cookiePolicy={"single_host_origin"}
    />
  );
}

export default GoogleOAuth;
