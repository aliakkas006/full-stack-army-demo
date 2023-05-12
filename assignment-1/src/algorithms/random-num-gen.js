const generateRandom = (start, end) => {
    let diff = end - start;
    let rand = Math.random();
  
    rand = Math.floor(rand * diff);
    rand = rand + start;
  
    return rand;
  }

  module.exports = generateRandom