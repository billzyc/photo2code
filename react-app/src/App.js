import { CookiesProvider } from "react-cookie";
import { Route, BrowserRouter as Router } from "react-router-dom";

import "./App.scss";
import Login from "./pages/login/login.js";
import Landing from "./pages/landing/landing.js";
import Upload from "./pages/upload/upload.js";
import NavBar from "./components/navBar/navBar.js";

function App() {
  return (
    <div className="app">
      
    <Router>
      <CookiesProvider>
        <Route path="/" component={NavBar}/>
        <Route path="/" exact component={Landing}/>
        <Route path="/login" component={Login}/>
        <Route path="/upload" component={Upload}/>
      </CookiesProvider>
    </Router>
    
    </div>
  );
}

export default App;
