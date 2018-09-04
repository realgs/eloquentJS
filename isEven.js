function isEven (num) {
  if (num < 0) return isEven(Math.abs(num));
  else if (num == 1) return false;
  else if  (num == 0) return true;
  else return isEven(num - 2);
}
console.log(isEven(-1));