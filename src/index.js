import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

//Context
import { NoteProvider } from "./context/NoteProvider";
import { AnimatePresence } from "framer-motion";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <NoteProvider>
        <AnimatePresence>
          <App />
        </AnimatePresence>
      </NoteProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
