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
        <p>Test whatever you want</p>
      </div>
    );
  }
}

function loop(value, test, update, body) {
  if (!test(value)) return;
  body(value);
  value = update(value);
  loop(value, test, update, body);
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

let rtlScripts = SCRIPTS.filter(s => s.direction == "ttb");
console.log(rtlScripts.map(s => s.name));

ReactDOM.render(<Test />, document.getElementById('app'));