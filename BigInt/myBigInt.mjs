function serialize(test) {
  return JSON.stringify(test, bigIntReplacer);
}

function bigIntReplacer(_key, value) {
  if (typeof value === 'bigint') {
    return value + 'n';
  }
  return value;
}

function deserialize(str) {
  return JSON.parse(str, myBigInt);
}

function myBigInt(_key, value) {
  if (typeof value === 'string' && value.endsWith('n')) {
    return BigInt(value.slice(0, value.length - 1));
  }
  return value;
}

export {serialize, deserialize}