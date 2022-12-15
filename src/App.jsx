import React, { useState } from "react";

import { quotes } from "./data/quotes";

import "./App.css";

export const App = () => {

  const [frase, setfrase] = useState({});

  const buildRandomNumber = (maxLimit) => {
    let random = Math.random();
    return Math.floor(random * maxLimit);
  };

  const getRandomQuote = () => {
    const randomNumber = buildRandomNumber(quotes.length);
    setfrase(quotes[randomNumber]);
  };

  return (
    <div className="app">
      <div className="card">
        <h1 className="heading">{frase.quote}</h1>
        <h4 className="author">{frase.from}</h4>
        <button className="button" onClick={getRandomQuote}>
          <span>Generate quote</span>
        </button>
      </div>
    </div>
  );
};
