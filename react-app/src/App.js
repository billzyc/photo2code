import React, { useState, useEffect, useContext } from "react";

import ClipLoader from "react-spinners/ClipLoader";
import { useCookies } from "react-cookie";

import "./App.scss";
import Landing from "./components/Landing/Landing.js";
import Files from "./components/Files/Files.js";
import NavBar from "./components/NavBar/NavBar.js";
import { UserContext } from "./contexts/UserContext";
import { FilesContext } from "./contexts/FilesContext";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { userEmail, userID, updateUserContext } = useContext(UserContext);
  const { files, updateFiles } = useContext(FilesContext);
  const [cookies, setCookie] = useCookies(["token"]);

  console.log(userEmail);

  useEffect(() => {
    const getProfile = async () => {
      const res = await fetch("http://127.0.0.1:5000/profile", {
        method: "GET",
        headers: {
          Jwt: cookies.token,
        },
      });

      const apiResponse = await res.json();
      const userProfile = apiResponse["user_profile"];
      if (userProfile && userProfile.email && userProfile.id) {
        updateUserContext({
          userEmail: userProfile["email"],
          userFirstName: userProfile["first_name"],
          userLastName: userProfile["last_name"],
          userID: userProfile["id"],
        });
      }
    };
    if (cookies.token) {
      getProfile();
    }
    setIsLoading(false);
  }, []);

  //TODO: replace placeholder spinner
  return (
    <div className="app">
      <NavBar />
      {isLoading ? (
        <ClipLoader size={150} />
      ) : userEmail && userID ? (
        <Files />
      ) : (
        <Landing />
      )}
    </div>
  );
}

export default App;
