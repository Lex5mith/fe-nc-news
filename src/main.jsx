import React, { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { lightTheme, darkTheme } from "./themes/theme.js";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { UserProvider } from "./contexts/User.jsx";
import { ModeProvider } from "./contexts/Mode.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ModeProvider>
      <UserProvider>
        <React.StrictMode>
          <CssBaseline />
          <App />
        </React.StrictMode>
      </UserProvider>
    </ModeProvider>
  </BrowserRouter>
);
