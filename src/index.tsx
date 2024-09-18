import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
 
import { ThemeProvider } from './ThemeContext';
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
     <ThemeProvider>
      <App />
      </ThemeProvider>

  </React.StrictMode>
);
 
 reportWebVitals();
