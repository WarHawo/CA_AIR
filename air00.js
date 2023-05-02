/* programme qui découpe une chaîne de caractères en tableau (séparateurs : espaces, tabulations, retours à la ligne)
*/

const {displayStrArray, displayTab} = require('./utils/display');

function mySplit(string, sep) {
  let tab = [];
  let str = "";
  let numSep = 0;
  let j = 0;
  
  if (!string || !sep || sep.length > 1){
    return("erreur: argument incorrecte");
  }
    
  for (let i = 0; i < string.length; i++) {
    if (string[i] === sep)
      numSep++;
  }
  
  for (let i = 0; i <= numSep; i++) {
    while (string[j] !== sep && j < string.length) {
      str += string [j];
      j++;
    }
    tab[i] = str;
    str = "";
    j++;
  }
  return tab;
}

module.exports = mySplit;

//string = process.argv[2];
//displayTab(mySplit(string, " "));
