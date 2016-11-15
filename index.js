#!/usr/bin/env node

const path = require('path')
const ui = require('cliui')({ width: 100 })
const { gray, cyan } = require('chalk')
const { scriptHelp } = require(path.join(process.cwd(), 'package.json'))

if (!scriptHelp) throw new Error('Failed to find `scriptHelp` config in package.json')

const shortScripts = ['start', 'test']
const buildCmd = (script) => `npm ${shortScripts.includes(script) ? '' : 'run '}${script}`
const width = Object.keys(scriptHelp).reduce((accum, { length }) => Math.max(length, accum), 6) + 5
const padding = [0, 0, 1, 0]

ui.div({
  text: gray('Script'),
  padding,
  width
}, {
  text: gray('Usage')
}, {
  text: gray('Description')
})

Object.keys(scriptHelp).forEach((script) => {
  let { usage = '$0', desc } = scriptHelp[script]
  const cmd = buildCmd(script)

  usage = (Array.isArray(usage) ? usage.map(i => cyan(i)).join('\n') : cyan(usage)).replace(/\$0/g, cmd)
  desc = desc.replace(/\$0/g, cmd)

  ui.div({
    text: cyan.bold(script),
    width
  }, {
    text: usage,
    padding
  }, {
    text: desc,
    padding
  })
})

console.log(ui.toString())
