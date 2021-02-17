import React, { useContext } from "react";
import GoogleLogin from "react-google-login";
import { useCookies } from "react-cookie";

import "./GoogleOAuth.scss";
import { UserContext } from "../../contexts/UserContext";
import getUserInformation from "../../utils/getUserInformation";
import { FilesContext } from "../../contexts/FilesContext";
import { photo2codeAPI, PHOTO2CODE_ROUTES } from "../../consts/urls";

function GoogleOAuth() {
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const { updateUserContext, clearUserContext } = useContext(UserContext);
  const { updateFiles, clearFiles } = useContext(FilesContext);
  const { userEmail, userID } = useContext(UserContext);

  const clientId =
    "681258670642-cdmnl2u2f679khc07railjprdct59n66.apps.googleusercontent.com";

  const onSuccess = async (response) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ gToken: response.tokenId }),
    };

    const { GOOGLE_SIGN_IN } = PHOTO2CODE_ROUTES;

    const apiResponse = await fetch(
      `${photo2codeAPI}${GOOGLE_SIGN_IN}`,
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

  const logOut = async () => {
    //TODO: add loader for logout
    await clearUserContext();
    await clearFiles();
    await removeCookie("token", { path: "/" });
  };

  return userEmail && userID ? (
    <button className="logout-button" onClick={logOut}>
      Log Out
    </button>
  ) : (
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
