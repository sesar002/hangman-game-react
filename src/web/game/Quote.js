import React from "react";
import { useSelector } from "react-redux";

const Quote = () => {
  const game = useSelector((state) => state.game);

  return (
    <div className="quote">
      {game.hiddenQuote.map((word, idx) => {
        const newWord = word.map((char, i) => {
          return (
            <div key={i} className="char">
              {char}
            </div>
          );
        });
        return (
          <div key={idx + 100} className="word">
            {newWord}
          </div>
        );
      })}
    </div>
  );
};

export default Quote;
