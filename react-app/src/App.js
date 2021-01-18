import React, { useState, useEffect, useContext } from "react";

import PulseLoader from "react-spinners/PulseLoader";
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
  const [cookies] = useCookies(["token"]);

  useEffect(() => {
    if (cookies.token) {
      getUserInformation(cookies.token, updateUserContext, updateFiles);
    }
    setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //TODO: replace placeholder spinner
  return (
    <div className="app">
      <NavBar />
      <div className="app-content">
        {isLoading ? (
          <PulseLoader size={30} />
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
