import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import axios from "axios";
import "./style.scss";
import Hangman from "./game/Hangman";
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

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get("https://api.quotable.io/random").then((res) => {
      const data = res.data;

      const unique = findUnique(data.content);
      let uniqueLength = 0;
      for (let i = 0; i < unique.length; i++) {
        if (isLetter(unique[i])) {
          uniqueLength++;
        }
      }

      const newHiddenQuote = [...data.content].map((char) => {
        if (isLetter(char)) {
          return "_";
        }
        return char;
      });

      changeQuote(data.content);
      changeQuoteId(data._id);
      changeQuoteLength(data.length);
      changeHiddenQuote(newHiddenQuote);
      changeStartTime(new Date().getTime());
      changeUniqueCharacters(uniqueLength);
    });
  };
  return (
    <div>
      <div
        className={user.quote === "" ? "start-screen" : " start-screen move-up"}
      >
        <h1>Welcome to hangman game, enter your name to continue:</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            minLength="2"
            onChange={(e) => changeUserName(e.target.value)}
          />
          <input type="submit" value="Play" />
        </form>
      </div>
      <div className="game">
        <h1>GAME</h1>
        <Hangman />
      </div>
    </div>
  );
};

export default Main;
