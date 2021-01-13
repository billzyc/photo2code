import ReactDOM from "react-dom";
import React from "react";
import "./index.scss";
import App from "./App";
import { CookiesProvider } from "react-cookie";

import UserContextProvider from "./contexts/UserContext";
import FilesContextProvider from "./contexts/FilesContext";

ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <UserContextProvider>
        <FilesContextProvider>
          <App />
        </FilesContextProvider>
      </UserContextProvider>
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
