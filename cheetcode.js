const fs = require('fs');
const colors = require('colors');

const exercises = [
  { file: 'air00.js', test: () => testAir00() },
  { file: 'air01.js', test: () => testAir01() },
  { file: 'air02.js', test: () => testAir02() },
  // entrées pour chaque exercice
];

let successCount = 0;
let failureCount = 0;
let numTest = 0;

function testAir00() {
  const mySplit = require('./air00');
  const tests = [
    { input: ['Hello World', ' '], expectedOutput: ['Hello', 'World'] },
    { input: ['a-b-c', '-'], expectedOutput: ['a', 'b', 'c'] },
    { input: ['', ' '], expectedOutput: "erreur: le nombre d'argument est incorrecte"},
  ];
  const successCount = tests.filter(test => JSON.stringify(mySplit(...test.input)) === JSON.stringify(test.expectedOutput)).length;
  console.log(`air00.js (${successCount}/${tests.length}): ${successCount === tests.length ? 'success'.green : 'failure'.red}`);
  numTest += tests.length;
  return successCount == tests.length;
}

function testAir01() {
  const mySplitStr = require('./air01');
  const tests = [
    { input: ['Hello World', ' '], expectedOutput: ['Hello', 'World'] },
    { input: ['a-b-c', '-'], expectedOutput: ['a', 'b', 'c'] },
    //  tests supplémentaires
  ];
  const successCount = tests.filter(test => JSON.stringify(mySplitStr(...test.input)) === JSON.stringify(test.expectedOutput)).length;
  console.log(`air01.js (${successCount}/${tests.length}): ${successCount === tests.length ? 'success'.green : 'failure'.red}`);
  numTest += tests.length;
  return successCount === tests.length;
}

function testAir02() {
  const myStrConcat = require('./air02');
  const tests = [
    { input: [['Hello', 'World'], '-'], expectedOutput: "Hello-World"
  },
   { input: [['a', 'b', 'c'], '_'], expectedOutput: 'a_b_c' },
    // Atests supplémentaires
  ];
  const successCount = tests.filter(test => myStrConcat(...test.input) === test.expectedOutput).length;
  console.log(`air02.js (${successCount}/${tests.length}): ${successCount === tests.length ? 'success'.green : 'failure'.red}`);
  numTest += tests.length;
  return successCount === tests.length;
}

exercises.forEach(({ file, test }) => {
  if (fs.existsSync(file)) {
    const success = test();
    if (success) {
      successCount++;
    } else {
      failureCount++;
    }
  } else {
    failureCount++;
  }
});

console.log(`Total success: (${successCount}/${numTest})`);
