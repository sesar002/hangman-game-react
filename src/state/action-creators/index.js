export const changeQuote = (newQuote) => {
  return (dispatch) => {
    dispatch({
      type: "changeQuote",
      newQuote: newQuote,
    });
  };
};
export const changeQuoteId = (newQuoteId) => {
  return (dispatch) => {
    dispatch({
      type: "changeQuoteId",
      newQuoteId: newQuoteId,
    });
  };
};
export const changeQuoteLength = (newQuoteLength) => {
  return (dispatch) => {
    dispatch({
      type: "changeQuoteLength",
      newQuoteLength: newQuoteLength,
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
export const changeStartTime = (newStartTime) => {
  return (dispatch) => {
    dispatch({
      type: "changeStartTime",
      newStartTime: newStartTime,
    });
  };
};
export const changeHiddenQuote = (newHiddenQuote) => {
  return (dispatch) => {
    dispatch({
      type: "changeHiddenQuote",
      newHiddenQuote: newHiddenQuote,
    });
  };
};
export const changeDisableds = (newDisableds) => {
  return (dispatch) => {
    dispatch({
      type: "changeDisableds",
      newDisableds: newDisableds,
    });
  };
};
export const changeHighscores = (newHighscores) => {
  return (dispatch) => {
    dispatch({
      type: "changeHighscores",
      newHighscores: newHighscores,
    });
  };
};
