const initialState = {
  hiddenQuote: [],
  disableds: [],
  highscores: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "changeHiddenQuote":
      return { ...state, hiddenQuote: action.newHiddenQuote };
    case "changeDisableds":
      return { ...state, disableds: action.newDisableds };
    case "changeHighscores":
      return { ...state, highscores: action.newHighscores };
    default:
      return state;
  }
};

export default reducer;
