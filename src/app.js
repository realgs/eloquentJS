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
function reverseArray(oldArray) {
  let output = [];
  for (let i = array.length - 1; i >= 0; i--) {
    output.push(array[i]);
  }
  return output;
}
function reverseArrayInPlace(array) {
  const length = array.length;
  const halfLength = Math.floor(array.length / 2);
  for (let i = 0; i < halfLength; i++) {
    let temp = array[i];
    array[i] = array[length - 1 - i];
    array[length - 1 - i] = temp;
  }
  return array;
}
let range = (start, end, step = (start <= end ? 1 : -1)) => {
  let array = [];
  if (step > 0) {
    for (let i = start; i <= end; i += step) array.push(i);
  } else if (step < 0) {
    for (let i = start; i >= end; i += step) array.push(i);
  }
  return array;
};
const array = range(1, 10000000);
const array2 = range(1, 10000000);
const t0 = performance.now();
reverseArray(array);
const t1 = performance.now();
reverseArrayInPlace(array2);
const t2 = performance.now();
console.log('Reverse took ', (t1 - t0), ' reverseInPlace took ', (t2 - t1));
ReactDOM.render(<Test />, document.getElementById('app'));