/* programme qui retourne la valeur d’une liste qui n’a pas de paire.
*/
function findOdd(arg) {
  const occ = [];

  if (!arg || (arg.length % 2) === 0 ) {
    console.log("erreur, le nombre d'argument est incorrecte");
    process.exit(1);
  }

  for (let i = 0; i < arg.length; i++) {
    const idx = occ.indexOf(arg[i]);
    if (idx !== -1)
      occ.splice(idx, 1);
    else
      occ.push(arg[i])
  }
  if (occ.length > 1) {
    console.log("erreur, il y a plusieur intru");
    process.exit(1);
  }    
  return occ[0];
}

args = process.argv.slice(2);
console.log(findOdd(args));