Array.prototype.uniq = function() {
  let uniqueArray = [];

  for (let i = 0; i < this.length; i++) {
    if (uniqueArray.indexOf(this[i]) === -1) {
      uniqueArray.push(this[i]);
    }
  }

  return uniqueArray;
};


Array.prototype.twoSum = function () {
  let twosumArray = [];

  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j < this.length; j++){
      if (this[i] + this[j] === 0){
        twosumArray.push([i, j]);
      }
    }
  }

  return twosumArray;
};

Array.prototype.transpose = function() {
  let copy = [];

  for (let i = 0; i < this.length; i++){
    for (let j = 0; j < this[i].length; j++){
      if (copy[j] === undefined) copy[j] = [];
      copy[j][i] = this[i][j];
    }
  }

  return copy;
};
