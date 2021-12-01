import { serialize, deserialize } from './myBigInt.mjs';
import { assert } from 'chai';

const myObj = {
  tNumber: 123,
  BigInt: 987n,
  nested: {
    myProp: 5n,
    myProp2: 10,
    myArray: [5n],
    myObject: {
      test: 5n,
    },
  },

  myArray: [5, 50n],
};

const mySerial =
  '{"tNumber":123,"BigInt":"987n","nested":{"myProp":"5n","myProp2":10,"myArray":["5n"],"myObject":{"test":"5n"}},"myArray":[5,"50n"]}';
const myJson = '{"BigInt":"45652357324121n","testNumber":123}';

const myDeJson = {
  BigInt: 45652357324121n,
  testNumber: 123,
};
assert.deepEqual(deserialize(mySerial), myObj);
assert.deepEqual(serialize(myObj), mySerial);
assert.deepEqual(deserialize(myJson), myDeJson);
assert.deepEqual(serialize(myDeJson), myJson);
