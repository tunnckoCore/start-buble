/*!
 * start-buble <https://github.com/tunnckoCore/start-buble>
 *
 * Copyright (c) Charlike Mike Reagent <@tunnckoCore> (http://i.am.charlike.online)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

const test = require('mukla')
const buble = require('./index')
const read = require('start-read').default

const noop = () => {}

test('start-buble', (done) => {
  read()(['./index.js'])(noop)
    .then(buble())
    .then((fn) => fn(noop))
    .then((files) => {
      const code = files[0].data
      test.strictEqual(/var startBuble =/.test(code), true)
      test.strictEqual(/var bubleTransform = require/.test(code), true)
      done()
    })
    .catch(done)
})
