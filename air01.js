/* programme qui découpe une chaîne de caractères en tableau en fonction du séparateur donné en 2e argument.
*/

const {displayStrArray, displayTab} = require('./utils/display');

function mySplitStr(string, sep) {
  if (!string || !sep) {
    return ("erreur: argument incorrecte");
  }
  
  let newTab = string.replaceAll(sep, "µ").split("µ");
  return newTab;
}
module.exports = mySplitStr;

//string = process.argv[2];
//sep = process.argv[3];
//console.log(mySplitStr(string, sep));