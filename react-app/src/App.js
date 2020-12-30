import { CookiesProvider } from "react-cookie";
import { Route, BrowserRouter as Router } from "react-router-dom";

import "./App.scss";
import Login from "./pages/login/login.js";
import Landing from "./pages/landing/landing.js";

function App() {
  return (
    <Router>
      <CookiesProvider>
        <Route path="/" exact component={Landing}/>
        <Route path="/login" component={Login}/>
      </CookiesProvider>
    </Router>
  );
}

export default App;
