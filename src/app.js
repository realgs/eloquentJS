//require('./src/scripts.js');
class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div>
        <p>Dominant text direction of 'Hey, مساء الخير' is: {dominantDirection('Hey, مساء الخير')}</p>
      </div>
    );
  }
}
function dominantDirection(text) {
  let counted = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({description}) => description != "none");

  if (counted.length == 0) return 'ltr';

  return counted.reduce((a, b) => {return a.count > b.count ? a : b}).name;
}
function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to;
    })) {
      return script;
    }
  }
  return null;
}
function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({ name, count: 1 });
    } else {
      counts[known].count++;
    }
  }
  return counts;
}
function every(array, test) {
  for (let elem of array) {
    if(!test(elem)) return false;
  }
  return true;
}
function everyUsingSome(array, test) {
  return array.some((arg) => !test(arg)) ? false : true;
}
console.log(everyUsingSome([1, 3, 5], n => n < 10));
// → true
console.log(everyUsingSome([2, 4, 16], n => n < 10));
// → false
console.log(everyUsingSome([], n => n < 10));
// → true
ReactDOM.render(<Test />, document.getElementById('app'));