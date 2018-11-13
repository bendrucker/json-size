# json-size [![Build Status](https://travis-ci.org/bendrucker/json-size.svg?branch=master)](https://travis-ci.org/bendrucker/json-size) [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/json-size.svg)](https://greenkeeper.io/)

> Find the size (bytes) of a serialized object


## Install

```
$ npm install --save json-size
```


## Usage

```js
var jsonSize = require('json-size')

jsonSize({foo: 'bar'})
//=> 13
```

## API

#### `jsonSize(value)` -> `number`

Returns the number of bytes of the resulting JSON.

##### value

*Required*  
Type: `any`

A value to stringify.


## License

MIT © [Ben Drucker](http://bendrucker.me)
