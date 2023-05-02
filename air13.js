const fs = require('fs');
const colors = require('colors');

const exercices = [
  { file: 'air00.js', test: () => testAir00() },
  { file: 'air01.js', test: () => testAir01() },
  { file: 'air02.js', test: () => testAir02() },
  
];

let successCount = 0;
let failureCount = 0;
let testCount = 0;

function testAir00() {
  const mySplit = require('./air00');
  const tests = [
    { input: ['Hello World', ' '], expectedOutput: ['Hello', 'World'] },
    { input: ['hello_my_name_is_hawa', '_'], expectedOutput: ['hello', 'my', 'name', 'is', 'hawa'] },
    { input: ['', '+'], expectedOutput: "erreur: argument incorrecte" },
    { input: ['hello', ''], expectedOutput: "erreur: argument incorrecte" },
    { input: ['hello my World', 'my'], expectedOutput: "erreur: argument incorrecte" },
    
  ];
  const success = tests.filter(test => JSON.stringify(mySplit(...test.input)) === JSON.stringify(test.expectedOutput)).length;
  console.log(`air00: (${success}/${tests.length}): ${success === tests.length ? 'sucess'.green : 'failure'.red}`);
  testCount = tests.length;
  successCount = success;
  return success === tests.length;
}

function testAir01() {
  const mySplitStr = require('./air01');
  const tests = [
    { input: ['Hello my World', 'my'], expectedOutput: ['Hello ', ' World'] },
    { input: ['hello love my love name love is love hawa', 'love'], expectedOutput: ['hello ', ' my ', ' name ', ' is ', ' hawa'] },
    { input: ['', 'love'], expectedOutput: "erreur: argument incorrecte" },
    { input: ['hello', ''], expectedOutput: "erreur: argument incorrecte" },
  ];
  const success = tests.filter(test => JSON.stringify(mySplitStr(...test.input)) === JSON.stringify(test.expectedOutput)).length;
  console.log(`air01: (${success}/${tests.length}): ${success === tests.length ? 'sucess'.green : 'failure'.red}`);
  testCount = tests.length;
  successCount = success;
  return success === tests.length;
}

function testAir02() {
  const myStrConcat = require('./air02');
  const tests = [
    { input: ['Hello my World', 'my'], expectedOutput: ['Hello ', ' World'] },
    { input: ['hello love my love name love is love hawa', 'love'], expectedOutput: ['hello ', ' my ', ' name ', ' is ', ' hawa'] },
    { input: ['', 'love'], expectedOutput: "erreur: argument incorrecte" },
    { input: ['hello', ''], expectedOutput: "erreur: argument incorrecte" },
  ];
  const success = tests.filter(test => myStrConcat(...test.input)) === JSON.stringify(test.expectedOutput)).length;
  console.log(`air01: (${success}/${tests.length}): ${success === tests.length ? 'sucess'.green : 'failure'.red}`);
  testCount = tests.length;
  successCount = success;
  return success === tests.length;
}

exercices.forEach(({ file, test }) => {
  if(fs.existsSync(file)) {
    const success = test();
    if (!success) {
      failureCount++;
    }
  } else {
    failureCount++;
  }
});

console.log(`\n\nTotal success: (${successCount}/${testCount}) \nTotal fail: ${failureCount}`);