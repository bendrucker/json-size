'use strict'

var bytes = require('utf8-length')

module.exports = function jsonSize (value) {
  return bytes(JSON.stringify(value))
}
