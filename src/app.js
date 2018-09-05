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

let rtlScripts = SCRIPTS.filter(s => s.direction == "ttb");
console.log(rtlScripts.map(s => s.name));

ReactDOM.render(<Test />, document.getElementById('app'));