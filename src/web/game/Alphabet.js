import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators } from "../../state/index";
import { bindActionCreators } from "redux";

const Alphabet = () => {
  const user = useSelector((state) => state.user);
  const game = useSelector((state) => state.game);
  const dispatch = useDispatch();

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

  const { changeErrors, changeHiddenQuote, changeDisableds } =
    bindActionCreators(actionCreators, dispatch);

  const handleAlphabetClick = (e, i) => {
    const char = e.target.innerText;
    const lowChar = char.toLowerCase();
    const quoteWords = user.quote.split(" ").map((word) => {
      const newWord = word.split("");
      return newWord;
    });
    let newHiddenQuote = [];

    if ([...user.quote].includes(char) || [...user.quote].includes(lowChar)) {
      newHiddenQuote = game.hiddenQuote.map((word, idx) => {
        const quoteWord = quoteWords[idx];
        const newWord = word.map((a, i) => {
          if (quoteWord[i] === char || quoteWord[i] === lowChar) {
            return (a = quoteWord[i]);
          } else {
            return a;
          }
        });
        return newWord;
      });
      changeHiddenQuote(newHiddenQuote);
    } else {
      changeErrors(user.errors + 1);
    }

    const stringHiddenQuote = newHiddenQuote
      .map((word) => {
        return word.join("");
      })
      .join(" ");

    if (user.quote === stringHiddenQuote) {
      changeDisableds(alphabet.map((a, i) => i));
      return;
    }
    changeDisableds([...game.disableds, i]);
  };

  return (
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
  );
};

export default Alphabet;
