import { CookiesProvider } from "react-cookie";
import { Route, BrowserRouter as Router } from "react-router-dom";

import "./App.scss";
import Login from "./pages/Login/Login.js";
import Landing from "./pages/Landing/Landing.js";
import Upload from "./pages/Upload/Upload.js";
import NavBar from "./components/NavBar/NavBar.js";
import UserContextProvider from "./contexts/UserContext";
import FilesContextProvider from "./contexts/FilesContext";

function App() {
  return (
    <div className="app">
      <Router>
        <CookiesProvider>
          <UserContextProvider>
            <FilesContextProvider>
              <Route path="/" component={NavBar} />
              <Route path="/" exact component={Landing} />
              <Route path="/login" component={Login} />
              <Route path="/upload" component={Upload} />
            </FilesContextProvider>
          </UserContextProvider>
        </CookiesProvider>
      </Router>
    </div>
  );
}

export default App;
