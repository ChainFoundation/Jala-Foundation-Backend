const testSet = new Set()

testSet.add("1")
testSet.add("2")
testSet.add("2")
testSet.add("3")
testSet.add("3")
testSet.add("3")
testSet.add("4")
testSet.add("4")
testSet.add("4")
testSet.add("4")
testSet.add(NaN)
testSet.add(NaN)



console.log(testSet)

t = ""
testSet.forEach((val) => {
    t += val
    console.log(t)
})


const ws = new WeakSet();
const foo = {};
const bar = {};

ws.add(foo);
ws.add(bar);

ws.has(foo);    // true
ws.has(bar);    // true

ws.delete(foo); // removes foo from the set
ws.has(foo);    // false, foo has been removed
ws.has(bar);    // true, bar is retained
