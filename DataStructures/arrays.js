let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 0];

const conc = arr1.concat(arr2);
console.log(conc);

console.log(arr1.pop() + " pop\n" + arr1);
console.log(".............");
console.log(arr2.push(1) + " push\n" + arr2);

console.log(".............");
for (let i in arr2) {
  console.log(arr2[i]);
}

console.log(".............");
for (let i of arr2) {
  console.log(i);
}

let mult1 = [
  ["a", "b"],
  ["c", "d"],
  ["e", "f"],
];
console.log(mult1);

for (m in mult1) {
  console.log(m);
}

for (m of mult1) {
  console.log(m);
}

console.log(arr2.find((x) => x % 2 == 1) + " find");

console.log(arr2.filter((x) => x % 2 == 1) + " filter");

console.log("map " + arr1.map((x) => [x * 2]));

console.log("flatmap " + arr1.flatMap((x) => [x * 2]));

console.log("sort " + arr1.sort());

console.log("sort " + ["c", "d", "a", "j"].sort());

const typedArray1 = new Int8Array(8);
console.log(typedArray1);

