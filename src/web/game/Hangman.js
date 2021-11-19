import React from "react";
import { useSelector } from "react-redux";

const Hangman = () => {
  const user = useSelector((state) => state.user);

  return (
    <div className="hangman">
      <div className="pole"></div>
      <div className="man">
        <div className="rope"></div>
        <div className={user.errors > 0 ? "head" : "head opacity"}>
          {user.errors}
        </div>
        <div className="body">
          <div
            className={user.errors > 2 ? "left-hand" : "left-hand opacity"}
          ></div>
          <div className={user.errors > 1 ? "center" : "center opacity"}></div>
          <div
            className={user.errors > 3 ? "right-hand" : "right-hand opacity"}
          ></div>
        </div>
        <div className="legs">
          <div
            className={user.errors > 4 ? "left-leg" : "left-leg opacity"}
          ></div>
          <div
            className={user.errors > 5 ? "right-leg" : "right-leg opacity"}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Hangman;
