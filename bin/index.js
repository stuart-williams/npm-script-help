#!/usr/bin/env node
'use strict';

var path = require('path');
var ui = require('cliui')({ width: 100 });

var _require = require('chalk'),
    gray = _require.gray,
    cyan = _require.cyan;

var _require2 = require(path.join(process.cwd(), 'package.json')),
    scriptHelp = _require2.scriptHelp;

if (!scriptHelp) throw new Error('Failed to find `scriptHelp` config in package.json');

var shortScripts = ['start', 'test', 'version'];
var buildCmd = function buildCmd(script) {
  return 'npm ' + (shortScripts.includes(script) ? '' : 'run ') + script;
};
var width = Object.keys(scriptHelp).reduce(function (accum, _ref) {
  var length = _ref.length;
  return Math.max(length, accum);
}, 6) + 5;
var padding = [0, 0, 1, 0];

ui.div({
  text: gray('Script'),
  padding: padding,
  width: width
}, {
  text: gray('Usage')
}, {
  text: gray('Description')
});

Object.keys(scriptHelp).forEach(function (script) {
  var _scriptHelp$script = scriptHelp[script],
      _scriptHelp$script$us = _scriptHelp$script.usage,
      usage = _scriptHelp$script$us === undefined ? '$0' : _scriptHelp$script$us,
      desc = _scriptHelp$script.desc;

  var cmd = buildCmd(script);

  usage = (Array.isArray(usage) ? usage.map(function (i) {
    return cyan(i);
  }).join('\n') : cyan(usage)).replace(/\$0/g, cmd);
  desc = desc.replace(/\$0/g, cmd);

  ui.div({
    text: cyan.bold(script),
    width: width
  }, {
    text: usage,
    padding: padding
  }, {
    text: desc,
    padding: padding
  });
});

console.log(ui.toString());