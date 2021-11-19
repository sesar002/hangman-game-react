import React from "react";
import "../style.scss";
import { useDispatch } from "react-redux";
import { actionCreators } from "../../state/index";
import { bindActionCreators } from "redux";
import axios from "axios";
import { findUnique, isLetter } from "../functions";
import Alphabet from "./Alphabet";
import Hangman from "./Hangman";
import Quote from "./Quote";

const Game = () => {
  const dispatch = useDispatch();

  const {
    changeQuote,
    changeUniqueCharacters,
    changeQuoteId,
    changeQuoteLength,
    changeStartTime,
    changeErrors,
    changeHiddenQuote,
    changeDisableds,
  } = bindActionCreators(actionCreators, dispatch);

  const handleClick = () => {
    axios
      .get("https://api.quotable.io/random")
      .then((res) => {
        const data = res.data;
        const unique = findUnique(data.content);
        let uniqueLength = 0;

        if (data.length > 50) {
          handleClick();
          return;
        } else {
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
          changeErrors(0);
          changeUniqueCharacters(uniqueLength);
          changeDisableds([]);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="game">
      <button className="restart" onClick={handleClick}>
        Restart
      </button>
      <Hangman />
      <Quote />
      <Alphabet />
    </div>
  );
};

export default Game;
