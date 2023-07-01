function arrayStringify(a) {
  let text = '';
  for (const num of a) {
    if (typeof num === 'number') {
      text += num;
    }
  }
  return text;
}

const a1 = [1, 2, 3];
const a2 = [10, 9, 8, 7, 6, 5];
const a3 = [];

console.log(arrayStringify(a1));
console.log(arrayStringify(a2));
console.log(arrayStringify(a3));

module.exports = arrayStringify;

