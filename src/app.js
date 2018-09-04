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

let size = 50;
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

ReactDOM.render(<Test />, document.getElementById('app'));