import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StarRating from "./components/rating/StarRating";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {
      <App />
      // <>
      //   <StarRating maxStarts={5} setRating={() => {}} />
      // </>
    }
  </React.StrictMode>
);
