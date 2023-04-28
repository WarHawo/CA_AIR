/* programme qui découpe une chaîne de caractères en tableau en fonction du séparateur donné en 2e argument.*/

function mySplitStr(string, sep) {
  if (!string || !sep) {
    console.error("erreur, le nombre d'argument est incorrecte");
    process.exit(1);
  }
  
  //let newTab = mySplit(string.replaceAll(sep, "*"), "*");
  let newTab = string.replaceAll(sep, "*").split("*");
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
displayTab(mySplitStr(string, sep));