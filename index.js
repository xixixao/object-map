module.exports = function (object, cb, context) {
  var newObject = {}
  for (var key in object) {
    if (!object.hasOwnProperty(key)) {
      continue;
    }
    newObject[key] = cb.call(context, object[key], key, object);
  }
  return newObject;
}
