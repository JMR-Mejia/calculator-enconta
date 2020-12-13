function* number() {
  let index = 0;
  while (true) {
    yield index;
    index++;
  }
}

module.exports = number();