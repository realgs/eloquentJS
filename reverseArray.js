function reverseArray(oldArray) {
  let newArray = [];
  while (oldArray.length > 0) {
    newArray.push(oldArray.pop());
  }
  return newArray;
}
function reverseArrayInPlace(array) {
  const length = array.length;
  const halfLength = Math.floor(array.length / 2);
  for (let i = 0; i < halfLength; i++) {
    let temp = array[i];
    array[i] = array[length - 1 - i];
    array[length - 1 - i] = temp;
  }
  return array;
}
console.log(reverseArray([1, 2, 3]));
console.log(reverseArrayInPlace([1, 2, 3]));
