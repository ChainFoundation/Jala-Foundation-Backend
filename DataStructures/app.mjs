import { assert } from "chai";

let str = "abc";
assert.equal(str.length, 3);

let x = 123;
let y = x;

x = 5;

assert.equal(y, 123);
console.log(y);
