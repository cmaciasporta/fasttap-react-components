'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _componentsMatch = require('./components/Match');

var _componentsMatch2 = _interopRequireDefault(_componentsMatch);

var player = {
  id: 1,
  nick: 'Player #1'
};

var opponent = {
  id: 2,
  nick: 'Player #2'
};

var onMatchEnd = function onMatchEnd(didWin) {
  if (didWin === true) return console.log('YOU WIN!');

  console.log('YOU LOSE...');
};

(0, _reactDom.render)(_react2['default'].createElement(_componentsMatch2['default'], { player: player, opponent: opponent, onMatchEnd: onMatchEnd }), document.querySelector('#app'));