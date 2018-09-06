function loop(value, test, update, body) {
  if (test(value)) {
    body(value);
    value = update(value);
    loop(value, test, update, body);
  }
}
function test(value) {
  if (value > 10) return false;
  return true;
}
function update(value) {
 return (value + 1);
}
function body(value) {
  console.log(value);
}
loop(1, test, update, body);
loop(1, x => x <= 10, x => x + 1, console.log);