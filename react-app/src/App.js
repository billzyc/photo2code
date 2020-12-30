import { CookiesProvider } from 'react-cookie';
import './App.scss';
import Login from './pages/login/login.js';

function App() {


  return (
    <CookiesProvider>
      <Login/>
    </CookiesProvider>
  );
}

export default App;
