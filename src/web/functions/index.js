export const isLetter = (str) => {
  return str.length === 1 && str.match(/[a-z]/i);
};

export const findUnique = (str) => {
  let uniq = "";
  for (let i = 0; i < str.length; i++) {
    if (uniq.includes(str[i]) === false) {
      uniq += str[i];
    }
  }
  return uniq;
};
