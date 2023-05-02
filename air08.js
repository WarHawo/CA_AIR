/*programme qui fusionne deux listes d’entiers triées en les gardant triées, les deux listes seront séparées par un “fusion”.
*/

const {displayStrArray, displayTab} = require('./utils/display');
const {isSorted, sortArray} = require('./utils/sort');
const parseNumber = require('./utils/parseNumber'); 

  
function sortedFusion(arr1,arr2)
{ 
  if (arr1.length < 1 || arr2.length < 1){
    return "Erreur : argument incorrect";
  }  
  parseNumber(arr1);
  parseNumber(arr2);
  const newArray = [];
  let i = 0, j = 0;

  while (i < arr1.length) {
      newArray.push(arr1[i]);
      i++;
  }
  while (j < arr2.length) {
      newArray.push(arr2[j]);
      j++;
  }

  let arr = sortArray(newArray);

  return arr;
}
module.exports = sortedFusion;

//const args = process.argv.slice(2);
//const index = args.indexOf("fusion");
//
//if (index < 0 || index === 0 || index === args.length - 1) {
//  console.error("Erreur : format des arguments invalide.");
//  process.exit(1);
//}
//const array1 = args.slice(0, index).map(Number);
//const array2 = args.slice(index + 1).map(Number);
//
//displayStrArray(sortedFusion(array1, array2));
