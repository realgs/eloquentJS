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

for (let num = 1; num <= 100; num++) {
  let output = "";
  if (num % 3 == 0) output += "Fizz";
  if (num % 5 == 0) output += "Buzz";
  console.log(output || num);
}

ReactDOM.render(<Test />, document.getElementById('app'));