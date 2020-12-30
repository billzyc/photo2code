import { CookiesProvider } from "react-cookie";

import "./login.scss";
import GoogleOAuth from "../../components/googleOAuth/googleOAuth.js";

function Login() {
  return (
    <div>
      <GoogleOAuth />
    </div>
  );
}

export default Login;
