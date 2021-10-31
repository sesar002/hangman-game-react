const initialState = {
  quoteId: "",
  length: "",
  uniqueCharacters: "",
  userName: "",
  errors: "",
  duration: "",
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "changeQuote":
      return { ...state, quoteId: action.newQuote };
    case "changeLength":
      return { ...state, length: action.newLength };
    case "changeUniqueCharacters":
      return { ...state, uniqueCharacters: action.newUniqueCharacters };
    case "changeUserName":
      return { ...state, userName: action.newUserName };
    case "changeErrors":
      return { ...state, errors: action.newErrors };
    case "changeDuration":
      return { ...state, duration: action.newDuration };
    default:
      return state;
  }
};

export default reducer;
