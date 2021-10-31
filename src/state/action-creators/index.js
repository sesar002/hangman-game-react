export const changeQuote = (newQuote) => {
  return (dispatch) => {
    dispatch({
      type: "changeQuote",
      newQuote: newQuote,
    });
  };
};
export const changeLength = (newLength) => {
  return (dispatch) => {
    dispatch({
      type: "changeLength",
      newLength: newLength,
    });
  };
};
export const changeUniqueCharacters = (newUniqueCharacters) => {
  return (dispatch) => {
    dispatch({
      type: "changeUniqueCharacters",
      newUniqueCharacters: newUniqueCharacters,
    });
  };
};
export const changeUserName = (newUserName) => {
  return (dispatch) => {
    dispatch({
      type: "changeUserName",
      newUserName: newUserName,
    });
  };
};
export const changeErrors = (newErrors) => {
  return (dispatch) => {
    dispatch({
      type: "changeErrors",
      newErrors: newErrors,
    });
  };
};
export const changeDuration = (newDuration) => {
  return (dispatch) => {
    dispatch({
      type: "changeDuration",
      newDuration: newDuration,
    });
  };
};
