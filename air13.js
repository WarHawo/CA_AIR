const fs = require('fs');
const colors = require('colors');

const exercices = [
  { file: 'air00.js', test: () => testAir00() },
  { file: 'air01.js', test: () => testAir01() },
  { file: 'air02.js', test: () => testAir02() },
  { file: 'air03.js', test: () => testAir03() },
  { file: 'air04.js', test: () => testAir04() },
  { file: 'air05.js', test: () => testAir05() },
  { file: 'air06.js', test: () => testAir06() },
  { file: 'air07.js', test: () => testAir07() },
  { file: 'air08.js', test: () => testAir08() },
  { file: 'air09.js', test: () => testAir09() },
];

let successCount = 0;
let failureCount = 0;
let testCount = 0;

function testAir00() {
  const mySplit = require('./air00');
  const tests = [
    { input: [ 'Hello World', ' ' ], expectedOutput: [ 'Hello', 'World' ] },
    { input: [ 'hello_my_name_is_hawa', '_' ], expectedOutput: [ 'hello', 'my', 'name', 'is', 'hawa' ] },
    { input: [ '', '+' ], expectedOutput: "Erreur : argument incorrect" },
    { input: [ 'hello', '' ], expectedOutput: "Erreur : argument incorrect" },
    { input: [ 'hello my World', 'my' ], expectedOutput: "Erreur : argument incorrect" },
    
  ];
  const success = tests.filter(test => JSON.stringify(mySplit(...test.input)) === JSON.stringify(test.expectedOutput)).length;
  console.log(`air00: (${success}/${tests.length}) ${success === tests.length ? 'sucess'.green : 'failure'.red}`);
  testCount += tests.length;
  successCount += success;
  return success === tests.length;
}

function testAir01() {
  const mySplitStr = require('./air01');
  const tests = [
    { input: [ 'Hello my World', 'my' ], expectedOutput: [ 'Hello ', ' World' ] },
    { input: [ 'hello love my love name love is love hawa', 'love' ], expectedOutput: [ 'hello ', ' my ', ' name ', ' is ', ' hawa' ] },
    { input: [ '', 'love' ], expectedOutput: "Erreur : argument incorrect" },
    { input: [ 'hello', '' ], expectedOutput: "Erreur : argument incorrect" },
  ];
  const success = tests.filter(test => JSON.stringify(mySplitStr(...test.input)) === JSON.stringify(test.expectedOutput)).length;
  console.log(`air01: (${success}/${tests.length}) ${success === tests.length ? 'sucess'.green : 'failure'.red}`);
  testCount += tests.length;
  successCount += success;
  return success === tests.length;
}

function testAir02() {
  const myStrConcat = require('./air02');
  const tests = [
    { input: [ '', '' ], expectedOutput: "Erreur : argument incorrect" },
    { input: [ ["Salut", "les", "amis"], "+" ], expectedOutput: "Salut+les+amis" },
    { input: [ ["Salut"], "+" ], expectedOutput: "Salut" },
  ];
  const success = tests.filter(test => myStrConcat(...test.input) === test.expectedOutput).length;
  console.log(`air02: (${success}/${tests.length}) ${success === tests.length ? 'sucess'.green : 'failure'.red}`);
  testCount += tests.length;
  successCount += success;
  return success === tests.length;
}

function testAir03() {
  const findOdd = require('./air03');
  const tests = [
    { input: [ ""], expectedOutput: "Erreur : argument incorrect" },
    { input: [ "1 2 3 4 5 4 3 2 1" ], expectedOutput: [ '5' ] },
    { input: [ "1 2 3 4 5 4 3 2 1 7" ], expectedOutput: "Il y a plus d'un intrus" },
  ];
  const success = tests.filter(test => JSON.stringify(findOdd(...test.input)) === JSON.stringify(test.expectedOutput)).length;
  console.log(`air03: (${success}/${tests.length}) ${success === tests.length ? 'sucess'.green : 'failure'.red}`);
  testCount += tests.length;
  successCount += success;
  return success === tests.length;
}

function testAir04() {
  const oneCharOnly = require('./air04');
  const tests = [
    { input: [ '' ], expectedOutput: "Erreur : argument incorrect" },
    { input: [ 'SSaalut les aaaaaaamiiiiiss' ], expectedOutput: 'Salut les amis' },
    { input: [ 'heeeeeeellllllloooooo                   wwwwwwooorlldd' ], expectedOutput: 'helo world' },
  ];
  const success = tests.filter(test => oneCharOnly(...test.input) === test.expectedOutput).length;
  console.log(`air04: (${success}/${tests.length}) ${success === tests.length ? 'sucess'.green : 'failure'.red}`);
  testCount += tests.length;
  successCount += success;
  return success === tests.length;
}

function testAir05() {
  const myCalculator = require('./air05');
  const tests = [
    { input: [ ['1', '2', '3', '4', '5', '+6'] ], expectedOutput: [ 7, 8, 9, 10, 11 ] },
    { input: [ ['-54', '0', '4585', '+65', '-85'] ], expectedOutput: [  -139, -85, 4500, -20 ] },
    { input: [ '' ], expectedOutput: "Erreur : argument incorrect" },
  ];
  const success = tests.filter(test => JSON.stringify(myCalculator(...test.input)) === JSON.stringify(test.expectedOutput)).length;
  console.log(`air05: (${success}/${tests.length}) ${success === tests.length ? 'sucess'.green : 'failure'.red}`);
  testCount += tests.length;
  successCount += success;
  return success === tests.length;
}

function testAir06() {
  const eraseArray = require('./air06');
  const tests = [
    { input: [ ["Albert", "Thomas", "Erica"], "a" ], expectedOutput: [] },
    { input: [ ["Albert", "Thomas", "Erica"], 'e' ], expectedOutput: [ "Thomas" ] },
    { input: [ "", "e" ], expectedOutput: "Erreur : argument incorrect" },
  ];
  const success = tests.filter(test => JSON.stringify(eraseArray(...test.input)) === JSON.stringify(test.expectedOutput)).length;
  console.log(`air06: (${success}/${tests.length}) ${success === tests.length ? 'sucess'.green : 'failure'.red}`);
  testCount += tests.length;
  successCount += success;
  return success === tests.length;
}

function testAir07() {
    const sortedInsert = require('./air07');
    const tests = [
      { input: [ [1, 3, 4], 2 ], expectedOutput: [ 1, 2, 3, 4 ] },
      { input: [ [3, 1, 4], 2 ], expectedOutput: "Erreur: le tableau en argument doit etre trié" },
      
    ];
    const success = tests.filter(test => JSON.stringify(sortedInsert(...test.input)) === JSON.stringify(test.expectedOutput)).length;
    console.log(`air07: (${success}/${tests.length}) ${success === tests.length ? 'sucess'.green : 'failure'.red}`);
    testCount += tests.length;
    successCount += success;
    return success === tests.length;
}

function testAir08() {
    const sortedFusion = require('./air08');
    const tests = [
      { input: [ [10, 20, 30], [15, 25, 35] ], expectedOutput: [ 10, 15, 20, 25, 30, 35 ] },
      { input: [ [], [15, 25, 35] ], expectedOutput: "Erreur : argument incorrect" },
      { input: [ [-3, 45, 89, -54], [15, -25, 35, 0] ], expectedOutput: [ -54, -25, -3,  0, 15,  35, 45, 89 ] },
      
    ];
    const success = tests.filter(test => JSON.stringify(sortedFusion(...test.input)) === JSON.stringify(test.expectedOutput)).length;
    console.log(`air08: (${success}/${tests.length}) ${success === tests.length ? 'sucess'.green : 'failure'.red}`);
    testCount += tests.length;
    successCount += success;
    return success === tests.length;
}

function testAir09() {
    const maRotation = require('./air09');
    const tests = [
      { input: [ ['Michel', 'Albert', 'Thérése', 'Benoit'] ], expectedOutput: [ 'Albert', 'Thérése', 'Benoit', 'Michel' ] },
      { input: [ [] ], expectedOutput: "Erreur : argument incorrect" },
      { input: [ [4, 1, 2, 3] ], expectedOutput: [ 1, 2, 3, 4] },
      
    ];
    const success = tests.filter(test => JSON.stringify(maRotation(...test.input)) === JSON.stringify(test.expectedOutput)).length;
    console.log(`air09: (${success}/${tests.length}) ${success === tests.length ? 'sucess'.green : 'failure'.red}`);
    testCount += tests.length;
    successCount += success;
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