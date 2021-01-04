import { CookiesProvider } from "react-cookie";

import "./App.scss";
import Landing from "./components/Landing/Landing.js";
import Upload from "./components/Upload/Upload.js";
import NavBar from "./components/NavBar/NavBar.js";
import UserContextProvider from "./contexts/UserContext";
import FilesContextProvider from "./contexts/FilesContext";

function App() {
  return (
    <CookiesProvider>
      <UserContextProvider>
        <FilesContextProvider>
          <div className="app">
            <NavBar />
            <Landing />
            <Upload />
          </div>
        </FilesContextProvider>
      </UserContextProvider>
    </CookiesProvider>
  );
}

export default App;
