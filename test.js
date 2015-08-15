'use strict'

var test = require('tape')
var jsonSize = require('./')

test(function (t) {
  t.equal(jsonSize({foo: 'bar'}), 13)
  t.end()
})
