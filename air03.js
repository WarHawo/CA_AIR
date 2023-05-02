/* programme qui retourne la valeur d’une liste qui n’a pas de paire.
*/

function findOdd(args) 
{
  let occurence = [];
  if (!args || (args.length % 2) == 0) {
    return("erreur: nombre d'arguments incorrect");
  }
 
  for (let i =0; i< args.length; i++) {
    let index = occurence.indexOf(args[i]);
    if (index !== -1)
      occurence.splice(index, 1);
    else
      occurence.push(args[i]);
  }

  if (occurence.length > 1)
    return "Il y a plus d'un intrus";
  return occurence;
}

//args = process.argv.slice(2)
//console.log(findOdd(args));