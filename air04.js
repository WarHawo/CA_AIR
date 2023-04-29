/* programme qui affiche une chaîne de caractères en évitant les caractères identiques adjacents.*/

function oneCharOnly(args)
{
    if (args.length !== 1) {
        console.error("erreur : nombre d'argument incorrecte");
        process.exit(1);
    }

    let newStr = args[0][0];
    for (let i = 1; i < args[0].length ; i++) {
        if (args[0][i] !== args[0][i - 1]) {
            newStr += args[0][i];
        }
    }
    return newStr;
}

args = process.argv.slice(2);
console.log(oneCharOnly(args));