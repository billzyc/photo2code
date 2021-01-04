import { CookiesProvider } from 'react-cookie';
import './login.scss';
import GoogleOAuth from '../../components/googleOAuth/googleOAuth.js';

function Login() {


  return (
    <CookiesProvider>
      <GoogleOAuth/>
    </CookiesProvider>
  );
}

export default Login;
