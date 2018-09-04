function countBs ( string ) {
return countChar(string, "B");
}

console.log(countBs("BBBaaBBBadfgsdgrrvdrdrgafsrssadvfvcasbvdsasb/sdBBBbbb"));

function countChar(string, character) {
let count = 0;
 for(let i = 0; i < string.length; i++) {
   if (string[i] == character) count++;
 }
 return count;
}
console.log(countChar("kakkerlak", "k"));