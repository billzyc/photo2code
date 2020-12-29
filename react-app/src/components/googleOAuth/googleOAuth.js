import GoogleLogin from "react-google-login";
import { useCookies } from "react-cookie";

import "./googleOAuth.css";

function GoogleOAuth() {
  const [cookies, setCookie] = useCookies(["token"]);

  const clientId =
    "681258670642-cdmnl2u2f679khc07railjprdct59n66.apps.googleusercontent.com";

  const onSuccess = async (response) => {

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ gToken: response.tokenId }),
    };

    const apiResponse = await fetch(
      "http://127.0.0.1:5001/googleSignin",
      requestOptions
    );

    const data = await apiResponse.json();
    setCookie('token',data.token, { path: '/' });
  };

  const onFail = () => {
    console.log("failed!");
  };

  return (
    <GoogleLogin
      clientId={clientId}
      buttonText="login with google!"
      onSuccess={onSuccess}
      onFailure={onFail}
      cookiePolicy={"single_host_origin"}
    />
  );
}

export default GoogleOAuth;