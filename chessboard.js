let size = 13;
let output = "";
for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    if ( (j + i) % 2 == 0) {
      output += " ";
    } else {
      output += "#";
    }
  }
  output += "\n";
}
console.log(output);