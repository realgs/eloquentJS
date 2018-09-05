let table = [1, [2, 3], 4];
let z = table.reduce((x, y) => x.concat(y), []);
console.log(z);