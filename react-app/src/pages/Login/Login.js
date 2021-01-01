import { CookiesProvider } from "react-cookie";

import "./Login.scss";
import GoogleOAuth from "../../components/GoogleOAuth/GoogleOAuth.js";

function Login() {
  return (
    <div>
      <GoogleOAuth />
    </div>
  );
}

export default Login;
