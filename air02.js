/* programme qui transforme un tableau de chaînes de caractères en une seule chaîne de caractères. Espacés d’un séparateur donné en dernier argument au programme.*/

function my_str_concat(str, sep) {
  let newStr = "";
  if(!str || !sep)
    return "error";
  for (let i = 0; i < str.length - 1; i++){
    newStr += str[i];
    if (i !== str.length - 2)
      newStr += sep;
  }
  return newStr;
}

str = process.argv.slice(2);
sep = str[str.length - 1];

console.log(my_str_concat(str, sep));