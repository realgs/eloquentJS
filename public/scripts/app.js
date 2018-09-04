'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Test = function (_React$Component) {
  _inherits(Test, _React$Component);

  function Test(props) {
    _classCallCheck(this, Test);

    var _this = _possibleConstructorReturn(this, (Test.__proto__ || Object.getPrototypeOf(Test)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(Test, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'p',
          null,
          'Test whatever you want'
        )
      );
    }
  }]);

  return Test;
}(React.Component);

function reverseArray(oldArray) {
  var output = [];
  for (var i = array.length - 1; i >= 0; i--) {
    output.push(array[i]);
  }
  return output;
}
function reverseArrayInPlace(array) {
  var length = array.length;
  var halfLength = Math.floor(array.length / 2);
  for (var i = 0; i < halfLength; i++) {
    var temp = array[i];
    array[i] = array[length - 1 - i];
    array[length - 1 - i] = temp;
  }
  return array;
}
var range = function range(start, end) {
  var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : start <= end ? 1 : -1;

  var array = [];
  if (step > 0) {
    for (var i = start; i <= end; i += step) {
      array.push(i);
    }
  } else if (step < 0) {
    for (var _i = start; _i >= end; _i += step) {
      array.push(_i);
    }
  }
  return array;
};
var array = range(1, 10000000);
var array2 = range(1, 10000000);
var t0 = performance.now();
reverseArray(array);
var t1 = performance.now();
reverseArrayInPlace(array2);
var t2 = performance.now();
console.log('Reverse took ', t1 - t0, ' reverseInPlace took ', t2 - t1);
ReactDOM.render(React.createElement(Test, null), document.getElementById('app'));
