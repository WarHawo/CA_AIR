/* programme qui découpe une chaîne de caractères en tableau en fonction du séparateur donné en 2e argument.
*/

const {displayStrArray, displayTab} = require('./utils/display');

function mySplitStr(string, sep) {
  if (!string || !sep) {
    return ("erreur: le nombre d'argument est incorrecte");
  }
  
  let newTab = string.replaceAll(sep, "*").split("*");
  return newTab;
}
module.exports = mySplitStr;
//string = process.argv[2];
//sep = process.argv[3];
//displayTab(mySplitStr(string, sep));