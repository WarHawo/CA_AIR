const mySplit = require('./air00');
const mySplitStr = require('./air01');

test('test de air00, mysplit("hello World", " " )', () => {
  expect(mySplit("hello world", " ")).toEqual([ 'hello', 'world' ]);
});
test('test de air00, mysplit("", " ")', () => {
  expect(mySplit("", " ")).toEqual("erreur: le nombre d'argument est incorrecte");
});
test('test de air00, mysplit("hello+World", "+" )', () => {
  expect(mySplit("hello world", " ")).toEqual([ 'hello', 'world' ]);
});
test('test de air00, mysplit("", " ")', () => {
  expect(mySplit("", " ")).toEqual("erreur: le nombre d'argument est incorrecte");
});
test('test de air01, mysplitstr("hello sup World", "sup" )', () => {
  expect(mySplitStr("hello sup World", "sup")).toEqual([ 'hello ', ' World' ]);
});
test('test de air01, mysplitStr("helllo world", "")', () => {
  expect(mySplitStr("helllo world", "")).toEqual("erreur: le nombre d'argument est incorrecte");
});
