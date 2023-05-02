/* programme qui retourne la valeur d’une liste qui n’a pas de paire.
*/

function findOdd(args) 
{
  let occurence = [];
  if (!args || (args.length % 2) === 0) {
    return "Erreur : argument incorrect";
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
module.exports = findOdd;

//args = process.argv.slice(2)
//console.log(findOdd(args));
//console.log(typeof(findOdd("1 2 3 4 5 4 3 2 1")));