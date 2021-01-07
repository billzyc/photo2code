import React, { useState, useEffect, useContext } from "react";

import ClipLoader from "react-spinners/ClipLoader";
import { useCookies } from "react-cookie";

import "./App.scss";
import Landing from "./pages/Landing/Landing.js";
import Files from "./pages/Files/Files.js";
import NavBar from "./components/NavBar/NavBar.js";
import { UserContext } from "./contexts/UserContext";
import getUserInformation from "./utils/getUserInformation";
import { FilesContext } from "./contexts/FilesContext";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { userEmail, userID, updateUserContext } = useContext(UserContext);
  const { updateFiles } = useContext(FilesContext);
  const [cookies, setCookie] = useCookies(["token"]);

  useEffect(() => {
    if (cookies.token) {
      getUserInformation(cookies.token, updateUserContext, updateFiles);
    }
    setIsLoading(false);
  }, []);

  //TODO: replace placeholder spinner
  return (
    <div className="app">
      <NavBar />
      <div className="app-content">
        {isLoading ? (
          <ClipLoader size={150} />
        ) : userEmail && userID ? (
          <Files />
        ) : (
          <Landing />
        )}
      </div>
    </div>
  );
}

export default App;
