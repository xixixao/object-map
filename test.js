var assert = require('assert');

var objectMap = require('./index');

var target;
var result;

// basic usage
target = {a: 1, b: 2};
result = objectMap(target, function (val) {
  return val * 4;
});
assert(result.a == 4, 'Values are mapped');
assert(result.b == 8, 'Values are mapped');

assert(target.a == 1, 'Target is unmodified');
assert(target.b == 2, 'Target is unmodified');

// keys
target = {b: "oba", f: "ett"};
result = objectMap(target, function (val, key) {
  return key + val;
});
assert(result.b == "boba", 'key is passed to callback');
assert(result.f == "fett", 'key is passed to callback');

// object
target = {a: 1, b: 2};
result = objectMap(target, function (val, key, object) {
  return object;
});
assert(result.a == target, 'object is passed to callback');
assert(result.b == target, 'object is passed to callback');

// thisArg
var that = {counter: 5};
target = {a: 1, b: 2};
result = objectMap(target, function (val) {
  return this.counter + val;
}, that);
assert(result.a == 6, 'thisArg is used as this in callback');
assert(result.b == 7, 'thisArg is used as this in callback');

console.log("Tests passed");
