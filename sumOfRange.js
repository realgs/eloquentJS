let range = (start, end, step = (start <= end ? 1 : -1)) => {
  let array = [];
  if (step > 0) {
    for (let i = start; i <= end; i += step) array.push(i);
  } else if (step < 0) {
    for (let i = start; i >= end; i += step) array.push(i);
  }
  return array;
};
let sum = (array) => {
  let sum = 0;
  for (let elem of array) {
    sum += elem;
  }
  return sum;
};
console.log(range(5, 1, -1));
console.log(range(5, -5));
console.log(sum(range(5, -5, -2)));