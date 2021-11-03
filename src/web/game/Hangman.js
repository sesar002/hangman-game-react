import React from "react";
import "../style.scss";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators } from "../../state/index";
import { bindActionCreators } from "redux";
import axios from "axios";
import { findUnique, isLetter } from "../functions";

const Hangman = () => {
  const user = useSelector((state) => state.user);
  const game = useSelector((state) => state.game);
  const dispatch = useDispatch();

  const postData = () => {
    axios
      .post(
        "https://my-json-server.typicode.com/stanko-ingemark/hang_the_wise_man_frontend_task/highscores",
        {
          quote: user.quote,
          length: user.quoteLength,
          uniqueCharacters: user.uniqueCharacters,
          userName: user.userName,
          errors: user.errors,
          duration: new Date().getTime() - user.startTime,
        },
        { "Content-Type": "application/json" }
      )
      .then((res) => {
        console.log("RESPONSE RECEIVED: ", res);
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
      });
  };

  const getHighscores = () => {
    axios
      .get(
        "https://my-json-server.typicode.com/stanko-ingemark/hang_the_wise_man_frontend_task/highscores"
      )
      .then((res) => {
        const data = res.data;
        console.log(res);

        const sortedData = data.sort((a, b) => {
          if (a.errors < b.errors) return 1;
          else if (
            a.errors === b.errors &&
            a.uniqueCharacters > b.uniqueCharacters
          )
            return 1;
          else if (
            (a.errors =
              b.errors &&
              a.uniqueCharacters === b.uniqueCharacters &&
              a.length > b.length)
          )
            return 1;
          else return a - b;
        });

        changeHighscores(sortedData);
        console.log(sortedData);
      });
  };

  const {
    changeQuote,
    changeUniqueCharacters,
    changeQuoteId,
    changeQuoteLength,
    changeStartTime,
    changeErrors,
    changeHiddenQuote,
    changeDisableds,
    changeHighscores,
  } = bindActionCreators(actionCreators, dispatch);

  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const handleClick = () => {
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
      changeErrors(0);
      changeUniqueCharacters(uniqueLength);
      changeDisableds([]);
    });
  };

  const handleAlphabetClick = (e, i) => {
    const char = e.target.innerText;
    const lowChar = char.toLowerCase();
    let newHiddenQuote = [];

    if ([...user.quote].includes(char) || [...user.quote].includes(lowChar)) {
      newHiddenQuote = game.hiddenQuote.map((a, i) => {
        if (user.quote[i] === char || user.quote[i] === lowChar) {
          return (a = user.quote[i]);
        } else {
          return a;
        }
      });
      changeHiddenQuote(newHiddenQuote);
    } else {
      changeErrors(user.errors + 1);
    }

    const stringHiddenQuote = newHiddenQuote.join("").toString();

    if (user.quote === stringHiddenQuote) {
      postData();
      getHighscores();
      changeDisableds(alphabet.map((a, i) => i));
      return;
    }
    changeDisableds([...game.disableds, i]);
  };

  return (
    <div className="game">
      <button onClick={handleClick}>Restart</button>
      <div className="quote">
        {game.hiddenQuote.map((char, i) => {
          if (char === "_") {
            return <div key={i} className="hidden"></div>;
          } else {
            return (
              <div key={i} className="not-hidden">
                {char}
              </div>
            );
          }
        })}
      </div>
      <div className="alphabet">
        {alphabet.map((char, i) => (
          <button
            key={i}
            className="alphabet-char"
            onClick={(e) => handleAlphabetClick(e, i)}
            disabled={user.disableds.includes(i)}
          >
            {char}
          </button>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default Hangman;
