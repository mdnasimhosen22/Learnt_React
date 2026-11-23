import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./mainApp/App.jsx";
import App2 from "./mainApp/App2.jsx";
import App3 from "./mainApp/App3.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <App2 />
    <br />
    <App3 />
  </StrictMode>,
);
