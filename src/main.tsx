import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// Remove no-js class on page load for animation purposes
document.documentElement.classList.remove('no-js');

// Create the root element
const root = ReactDOM.createRoot(document.getElementById("root")!);

// Render the application
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
