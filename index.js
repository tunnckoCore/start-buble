/*!
 * start-buble <https://github.com/tunnckoCore/start-buble>
 *
 * Copyright (c) Charlike Mike Reagent <@tunnckoCore> (http://i.am.charlike.online)
 * Released under the MIT license.
 */

'use strict'

const startBuble = (config) => (input) => {
  return function buble (log) {
    const bubleTransform = require('buble').transform
    const options = Object.assign({}, config)

    return new Promise(resolve => {
      const files = input.map(file => {
        const result = bubleTransform(file.data, options)

        log(file.path)

        return {
          path: file.path,
          data: result.code,
          map: result.map
        }
      })

      resolve(files)
    })
  }
}

module.exports = startBuble
