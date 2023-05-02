/* programme qui affiche une chaîne de caractères en évitant les caractères identiques adjacents.*/

function oneCharOnly(args)
{
    if (args.length !== 1) {
        return("erreur : nombre d'argument incorrecte");
    }

    let newStr = args[0][0];
    for (let i = 1; i < args[0].length ; i++) {
        if (args[0][i] !== args[0][i - 1]) {
            newStr += args[0][i];
        }
    }
    return newStr;
}

//args = process.argv.slice(2);
//console.log(oneCharOnly(args));