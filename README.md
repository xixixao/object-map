Map a function over the values of an Object to produce a new Object with the same keys.

The API is modelled after the native [Array#map](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/map) method.

## Installation
```bash
$ npm install --save object-map
```

## Example
```js
var objectMap = require('object-map');

var target = {
  foo: 1,
  bar: 2
};

var result = objectMap(target, function(value) {
  return value * value;
});
// => {foo: 1, bar: 4}
```

## API

`objectMap(target, callback[, thisArg])`

- `target` an object who's properties are iterated using `hasOwnProperty`
- `callback` a function producing a value of the new Object, taking three arguments:
  - `currentValue` the value currently associated with the key
  - `key` the current key
  - `object` the original object passed to `objectMap`
- `thisArg` Optional. Value to use as `this` when executing `callback`.

## License
[MIT](https://tldrlegal.com/license/mit-license)
