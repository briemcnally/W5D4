Array.prototype.bubbleSort = function() {
  var n = this.length;

  while(n !== 0){
    var newn = 0;
    for (var i = 1; i < this.length; i ++){
      if (this[i] < this[i - 1]) {
        var temp = this[i];
        this[i] = this[i -1];
        this[i - 1] = temp;
        newn = i;
      }
    }
    n = newn;
  }

 return this;
};

console.log([5, 3, 4, 2, 1].bubbleSort());

String.prototype.substrings = function () {
  let substrings = [];

  for (let start = 0; start < this.length; start++) {
    for (let end = start + 1; end <= this.length; end++) {
      substrings.push(this.slice(start, end));
    }
  }

  return substrings;
}; 
