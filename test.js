/*!
 * start-buble <https://github.com/tunnckoCore/start-buble>
 *
 * Copyright (c) Charlike Mike Reagent <@tunnckoCore> (http://i.am.charlike.online)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

const test = require('mukla')
const startBuble = require('./index')

test('start-buble', (done) => {
  startBuble()
  done()
})
