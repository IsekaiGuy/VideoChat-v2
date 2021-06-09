import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ContextProvider } from "./SocketContext";
import "./styles.css";

ReactDOM.render(
  <StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </StrictMode>,
  document.getElementById("root")
);
