import React from "react";
import {createRoot} from "react-dom/client";
import App from "../client/components/App.jsx";
import styles from "../client/scss/dashboard.scss";



const root = createRoot(document.getElementById("root"));
root.render(<App />)