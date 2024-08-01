import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { ContextPokemons } from "./context/Context.jsx";

library.add(fas);

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ContextPokemons>
      <App />
    </ContextPokemons>
  </BrowserRouter>
);
