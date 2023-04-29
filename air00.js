/* programme qui découpe une chaîne de caractères en tableau (séparateurs : espaces, tabulations, retours à la ligne). */

function mySplit(string, sep) {
  let tab = [];
  let str = "";
  let numSep = 0;
  let j = 0;
  
  if (!string || !sep || sep.length > 1){
    console.error("erreur: le nombre d'arguments est incorrecte");
    process.exit(1);
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

function displayTab(tab){
  for(let i = 0; i < tab.length; i++)
    {
      console.log(tab[i]);
    }
}

string = process.argv[2];
displayTab(mySplit(string, " "));
