const countChars = (str) => {
  let letters = 0;
  let symbols = 0;
  let numbers = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (/[a-zA-Z]/.test(char)) {
      letters++;
    } else if (/\d/.test(char)) {
      numbers++;
    } else {
      symbols++;
    }
  }

  return { letters, symbols, numbers };
};

module.exports = countChars;
