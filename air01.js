/* programme qui découpe une chaîne de caractères en tableau en fonction du séparateur donné en 2e argument.*/

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

function my_split_str(string, sep) {
  let newTab = [];
  let nSep = 0;
  let str = "";
  let j = 0;
  
  let tab = my_split(string, " ");
  for (let i = 0; i < tab.length; i++) {
    if (tab[i] === sep)
      nSep++;
  }
  for (let i = 0; i <= nSep; i++) {
    while (tab[j] !== sep && j < tab.length) {
      str += tab[j] + " ";
      j++;
    }
    newTab[i] = str;
    str = "";
    j++;
  }
  return newTab;
}

function my_split_fct(string, sep) {
  let newTab = my_split(string.replace(sep, "*"), "*");
  return newTab;
}

function displayTab(tab){
  for(let i = 0; i < tab.length; i++)
    {
      console.log(tab[i]);
    }
}

string = process.argv[2];
sep = process.argv[3];
displayTab(my_split_fct(string, sep));