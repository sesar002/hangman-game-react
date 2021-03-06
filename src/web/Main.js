import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import axios from "axios";
import "./style.scss";
import Game from "./game/Game";
import { findUnique, isLetter } from "./functions";

const Main = () => {
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const {
    changeUserName,
    changeQuote,
    changeQuoteId,
    changeQuoteLength,
    changeStartTime,
    changeHiddenQuote,
    changeUniqueCharacters,
  } = bindActionCreators(actionCreators, dispatch);

  const handleSubmit = () => {
    axios
      .get("https://api.quotable.io/random")
      .then((res) => {
        const data = res.data;

        if (data.content.length > 50) {
          handleSubmit();
          return;
        } else {
          const unique = findUnique(data.content);
          let uniqueLength = 0;
          for (let i = 0; i < unique.length; i++) {
            if (isLetter(unique[i])) {
              uniqueLength++;
            }
          }

          const newHiddenQuote = data.content.split(" ").map((word, i) => {
            let newWord = word.split("").map((letter, i) => {
              if (isLetter(letter)) {
                return "_";
              } else {
                return letter;
              }
            });
            return newWord;
          });

          changeQuote(data.content);
          changeQuoteId(data._id);
          changeQuoteLength(data.length);
          changeHiddenQuote(newHiddenQuote);
          changeStartTime(new Date().getTime());
          changeUniqueCharacters(uniqueLength);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div
        className={user.quote === "" ? "start-screen" : " start-screen move-up"}
      >
        <h1>Welcome to</h1>
        <span className="logo">HANGMAN GAME</span>
        <h1 className="bottom-header">enter your name to continue:</h1>
        <input
          type="text"
          minLength="2"
          onChange={(e) => changeUserName(e.target.value)}
        />
        <button onClick={() => handleSubmit()}>Play</button>
      </div>
      <Game />
    </div>
  );
};

export default Main;
