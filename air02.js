/* programme qui transforme un tableau de chaînes de caractères en une seule chaîne de caractères. Espacés d’un séparateur donné en dernier argument au programme.*/

function myStrConcat(str, sep) {
  let newStr = "";
  
  if (!str || !sep) {
    console.error("erreur");
    process.exit(1);
  }

  for (let i = 0; i < str.length - 1; i++){
    newStr += str[i];
    if (i !== str.length - 2)
      newStr += sep;
  }
  return newStr;
}

str = process.argv.slice(2);
sep = str[str.length - 1];

console.log(myStrConcat(str, sep));