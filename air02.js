/* programme qui transforme un tableau de chaînes de caractères en une seule chaîne de caractères. 
Espacés d’un séparateur donné en dernier argument au programme.*/

function myStrConcat(str, sep) {
  let newStr = "";
  
  if (!str || !sep) {
    return "Erreur : argument incorrect";
  }

  for (let i = 0; i < str.length; i++){
    newStr += str[i];
    if (i !== str.length - 1)
      newStr += sep;
  }
  return newStr;
}

module.exports = myStrConcat;

//arg = process.argv.slice(2);
//str = arg.slice(0, -1);
//sep = arg[arg.length - 1];
//
//console.log(myStrConcat(str, sep));
