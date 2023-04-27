/* programme qui affiche une chaîne de caractères en évitant les caractères identiques adjacents.
*/

function oneCharOnly(arg) {
  if (arg.length != 1) {
    console.error("erreur : nombre d'argument incorrecte");
    process.exit(1);
  }

  let result = arg[0][0];
  for (let i = 1; i < arg[0].length; i++) {
    if (arg[0][i] !== arg[0][i - 1])
      result += arg[0][i];
  }
    return result;
}

args = process.argv.slice(2);
console.log(oneCharOnly(args));