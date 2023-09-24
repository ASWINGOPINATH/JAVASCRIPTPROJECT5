function isObjEmptyUsingGetOwnPropertyNames (obj) {
    return Object.getOwnPropertyNames(obj).length === 0;
}

var emptyObject = {};
var object = {"foo": "bar"};

console.log(isObjEmptyUsingGetOwnPropertyNames(emptyObject))
console.log(isObjEmptyUsingGetOwnPropertyNames(object))
