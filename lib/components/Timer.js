"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Timer = (function (_React$Component) {
  _inherits(Timer, _React$Component);

  function Timer(props) {
    _classCallCheck(this, Timer);

    _get(Object.getPrototypeOf(Timer.prototype), "constructor", this).call(this, props);
    this.state = { timeleft: this.props.timeout };
    this.checkTimeout();
    this.interval = setInterval(this.onTick.bind(this), 1000);
  }

  _createClass(Timer, [{
    key: "checkTimeout",
    value: function checkTimeout() {
      if (this.state.timeleft <= 0) {
        clearInterval(this.interval);
        this.props.onTimeout();
      }
    }
  }, {
    key: "onTick",
    value: function onTick(amount) {
      this.setState({ timeleft: this.state.timeleft - 1 });
      this.checkTimeout();
    }
  }, {
    key: "render",
    value: function render() {
      return _react2["default"].createElement(
        "div",
        { className: "timer" },
        _react2["default"].createElement(
          "span",
          { className: "timer-counter" },
          this.state.timeleft
        )
      );
    }
  }]);

  return Timer;
})(_react2["default"].Component);

exports["default"] = Timer;

Timer.propTypes = {
  timeout: _react2["default"].PropTypes.number.isRequired,
  onTimeout: _react2["default"].PropTypes.func.isRequired
};
module.exports = exports["default"];