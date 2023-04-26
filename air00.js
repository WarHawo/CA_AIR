/* programme qui découpe une chaîne de caractères en tableau (séparateurs : espaces, tabulations, retours à la ligne). */

function my_split(string, sep) {
  let tab = [];
  let str = "";
  let nSep = 0;
  let j = 0;
  
  if (!string || !sep || sep.length > 1)
      return "error";
  
  for (let i = 0; i < string.length; i++) {
    if (string[i] === sep)
      nSep++;
  }
  
  for (let i = 0; i <= nSep; i++) {
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
displayTab(my_split(string, " "));
