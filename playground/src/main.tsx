import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import { getSum } from "@atomized-component/common";

// const res = getSum(1, 2);
// console.log(res);

// import "atomized-component/dist/style.css";
// import AtomizedComponent from "atomized-component";
// console.log(AtomizedComponent);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
