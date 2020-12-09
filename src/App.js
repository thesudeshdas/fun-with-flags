import React, { useState } from "react";
import "./styles.css";
import { flags } from "./flags.js";

// console.log(Object.keys(flags));
// const flagsInDatabase = Object.keys(flags);

export default function App() {
  const [flag, setFlag] = useState("");
  const [country, setCountry] = useState("Choose your country");

  function flagClickHandler(flag) {
    setFlag(flag);
    setCountry(flags[flag]);
  }

  function inputChangeHandler(event) {
    var flagSelected = event.target.value;

    setFlag(flagSelected);
    setCountry(
      flags[flagSelected] ||
        `? This doesn't exist in our Database. \nMaybe it is not a Country. YET!`
    );
  }

  return (
    <div className="App">
      <h1>
        <a href="https://www.youtube.com/watch?v=Xl12Sp1KiEk" target="blank">
          Fun With Flags
        </a>
      </h1>
      <p>
        "Learn about flags with Dr. Sheldon Cooper". Click the Title to learn
        more. ;)
      </p>
      <input
        onChange={inputChangeHandler}
        maxLength="4"
        placeholder={flag || `Enter any flag`}
      />
      <h2>
        {flag} {country}
      </h2>
      <div className="container-flag-holder">
        <ul>
          {Object.keys(flags).map((flag) => {
            return (
              <li
                key={flag}
                onClick={() => flagClickHandler(flag)}
                className="list-item-inline"
              >
                {flag}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
