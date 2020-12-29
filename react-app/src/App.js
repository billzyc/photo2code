import { CookiesProvider } from 'react-cookie';
import './App.css';
import GoogleOAuth from './components/googleOAuth/googleOAuth.js';

function App() {


  return (
    <CookiesProvider>
      <GoogleOAuth/>
    </CookiesProvider>
  );
}

export default App;
