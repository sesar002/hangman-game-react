const initialState = {
  hiddenQuote: [],
  disableds: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "changeHiddenQuote":
      return { ...state, hiddenQuote: action.newHiddenQuote };
    case "changeDisableds":
      return { ...state, disableds: action.newDisableds };
    default:
      return state;
  }
};

export default reducer;
