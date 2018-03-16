Array.prototype.myEach = function (func) {
  for (let i = 0; i < this.length; i++) {
    func(this[i]);
  }
};

Array.prototype.myMap = function (func) {
  let mapArray = [];

  this.myEach(el => mapArray.push(func(el)));

  return mapArray;
};


Array.prototype.myReduce = function (func, initialValue) {
  var output = func(initialValue, this[0]);
  for(var i = 1; i < this.length; i++) {
    output = func(output,this[i]);
  }

  return output;
};
