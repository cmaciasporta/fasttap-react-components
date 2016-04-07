'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BoardStatusBar = require('./BoardStatusBar');

var _BoardStatusBar2 = _interopRequireDefault(_BoardStatusBar);

var _Tappable = require('./Tappable');

var _Tappable2 = _interopRequireDefault(_Tappable);

var Board = (function (_React$Component) {
  _inherits(Board, _React$Component);

  function Board() {
    _classCallCheck(this, Board);

    _get(Object.getPrototypeOf(Board.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Board, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        { className: 'board' },
        _react2['default'].createElement(_BoardStatusBar2['default'], {
          timeleft: this.props.timeleft,
          score: this.props.score }),
        this.generateTappable()
      );
    }
  }, {
    key: 'generateTappable',
    value: function generateTappable() {
      var score = 1;
      return _react2['default'].createElement(_Tappable2['default'], {
        size: 1,
        score: score,
        onTap: this.onNewScore.bind(this) });
    }
  }, {
    key: 'onNewScore',
    value: function onNewScore(score) {
      this.props.onNewScore(score);
    }
  }]);

  return Board;
})(_react2['default'].Component);

exports['default'] = Board;

Board.propTypes = {
  score: _react2['default'].PropTypes.number.isRequired,
  timeleft: _react2['default'].PropTypes.number.isRequired,
  onNewScore: _react2['default'].PropTypes.func.isRequired
};
module.exports = exports['default'];