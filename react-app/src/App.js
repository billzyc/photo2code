import { CookiesProvider } from "react-cookie";

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
      <CookiesProvider>
        <UserContextProvider>
          <FilesContextProvider>
            <NavBar />
            <Landing />
            <Upload />
          </FilesContextProvider>
        </UserContextProvider>
      </CookiesProvider>
    </div>
  );
}

export default App;
