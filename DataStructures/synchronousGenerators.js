function* genFunc1() {
    yield 'a';
    yield 'b';
  }

  for (const x of genFunc1()) {
    console.log(x);
  }