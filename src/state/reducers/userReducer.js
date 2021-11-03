const initialState = {
  quote: "",
  quoteId: "",
  quoteLength: 0,
  uniqueCharacters: 0,
  userName: "",
  errors: 0,
  startTime: 0,
  hiddenQuote: [],
  disableds: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "changeQuote":
      return { ...state, quote: action.newQuote };
    case "changeQuoteId":
      return { ...state, quoteId: action.newQuoteId };
    case "changeQuoteLength":
      return { ...state, quoteLength: action.newQuoteLength };
    case "changeUniqueCharacters":
      return { ...state, uniqueCharacters: action.newUniqueCharacters };
    case "changeUserName":
      return { ...state, userName: action.newUserName };
    case "changeErrors":
      return { ...state, errors: action.newErrors };
    case "changeStartTime":
      return { ...state, startTime: action.newStartTime };
    case "changeEndTime":
      return { ...state, endTime: action.newEndTime };
    case "changeHiddenQuote":
      return { ...state, hiddenQuote: action.newHiddenQuote };
    case "changeDisableds":
      return { ...state, disableds: action.newDisableds };
    default:
      return state;
  }
};

export default reducer;
