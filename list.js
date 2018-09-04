let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};
function arrayToList(array) {
  if (array.length == 0) return null;
  return {
    value: array.shift(),
    rest: arrayToList(array)
  };
}
function listToArray(list) {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}
function prepend(value, list) {
  return { value, rest: list };
}
function nth(list, n) {
  if (!list) return undefined;
  else if (n == 0) return list.value;
  else return nth(list.rest, n - 1);
}
console.log(listToArray(list));
console.log(nth(list, 1));
console.log(arrayToList([1, 2, 3]));
console.log(list);