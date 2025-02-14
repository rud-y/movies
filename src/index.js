import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import StarRating, { TestMovieRating } from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={6}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating
      color="green"
      className="test"
      maxRating={5}
      defaultRating={2}
    />
    <TestMovieRating maxRating={8} /> */}
  </React.StrictMode>
);
