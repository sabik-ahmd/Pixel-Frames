// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GalleryProvider } from "./context/GalleryContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GalleryProvider>
      <App />
    </GalleryProvider>
  </React.StrictMode>
);
