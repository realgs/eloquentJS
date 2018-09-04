function reverseArray(oldArray) {
    let newArray = [];
    while (oldArray.length > 0) {
        newArray.push(oldArray.pop());
    }
    return newArray;
}
function reverse
console.log(reverseArray([1, 2, 3]));