function range(start, end) {
  var result = [];
  if (start === end){
    return result;
  }

  result.push(start);
  return result.concat(range(start + 1, end));
}

function sumRec(numbers) {
  if (numbers.length === 0) {
    return 0;
  } else {
    return numbers[0] + sumRec(numbers.slice(1));
  }
}

console.log(`sumRec([1, 3, 5]) = ${sumRec([1, 3, 5])}`);

function exp1(base, exponent) {
  if (exponent === 0) {
    return 1;
  } else {
    return (base * exp1(base, exponent - 1));
  }
}

function fibsRec(n) {
  if (n < 3) {
    return [0, 1].slice(0, n);
  }

  let fibs = fibsRec(n - 1);
  fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);

  return fibs;
}
