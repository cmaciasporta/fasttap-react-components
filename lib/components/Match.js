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

var _Board = require('./Board');

var _Board2 = _interopRequireDefault(_Board);

var _Timer = require('./Timer');

var _Timer2 = _interopRequireDefault(_Timer);

var _Score = require('./Score');

var _Score2 = _interopRequireDefault(_Score);

var Match = (function (_React$Component) {
  _inherits(Match, _React$Component);

  function Match(props) {
    _classCallCheck(this, Match);

    _get(Object.getPrototypeOf(Match.prototype), 'constructor', this).call(this, props);
    var timeleft = this.props.freezetime + this.props.duration;
    this.state = {
      score: 0,
      timeleft: timeleft,
      hasStarted: this.props.freezetime === 0 ? true : false,
      hasEnded: timeleft === 0 ? true : false
    };
  }

  _createClass(Match, [{
    key: 'render',
    value: function render() {
      if (this.state.hasEnded === true) return _react2['default'].createElement(_Score2['default'], {
        playerScore: this.state.score,
        opponentScore: 10,
        didWin: true });

      if (this.state.hasStarted === true) return _react2['default'].createElement(_Board2['default'], {
        score: this.state.score,
        timeleft: this.state.timeleft,
        onNewScore: this.onNewScore.bind(this) });

      return _react2['default'].createElement(_Timer2['default'], {
        timeout: this.props.freezetime,
        onTimeout: this.onStart.bind(this) });
    }
  }, {
    key: 'onNewScore',
    value: function onNewScore(score) {
      if (this.props.onNewScore) this.props.onNewScore(score);

      this.setState({
        score: this.state.score + score
      });
    }
  }, {
    key: 'onStart',
    value: function onStart() {
      if (this.props.onStart) this.props.onStart();

      setInterval(this.onTick.bind(this), 1000);
      setTimeout(this.onEnd.bind(this), (this.props.duration + this.props.freezetime) * 1000);

      this.setState({
        timeleft: this.props.duration,
        hasStarted: true
      });
    }
  }, {
    key: 'onTick',
    value: function onTick() {
      this.setState({
        timeleft: this.state.timeleft - 1
      });
      this.checkMatchEnd();
    }
  }, {
    key: 'checkMatchEnd',
    value: function checkMatchEnd() {
      if (this.state.timeleft <= 0) {
        this.setState({
          hasEnded: true
        });
      }
    }
  }, {
    key: 'onEnd',
    value: function onEnd() {
      this.props.onEnd(this.state.score);
      this.setState({
        hasEnded: true
      });
    }
  }]);

  return Match;
})(_react2['default'].Component);

exports['default'] = Match;

Match.propTypes = {
  player: _react2['default'].PropTypes.object.isRequired,
  opponent: _react2['default'].PropTypes.object.isRequired,
  duration: _react2['default'].PropTypes.number.isRequired,
  freezetime: _react2['default'].PropTypes.number.isRequired,
  onStart: _react2['default'].PropTypes.func,
  onNewScore: _react2['default'].PropTypes.func,
  onEnd: _react2['default'].PropTypes.func.isRequired
};
module.exports = exports['default'];