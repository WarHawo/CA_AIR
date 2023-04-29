/* programme qui supprime d’un tableau tous les éléments qui ne contiennent pas une autre chaîne de caractères.
*/

function eraseArray(arrayStr, str) 
{
    let newArray = [];

    if (!arrayStr || arrayStr.length < 1) {
        console.error("erreur: nombre d'argument incorrect");
        process.exit(1);
    }

    if (str.length > 1)
        return "Seulement un caractères est accepté en dernier argument";
    str = str.toLowerCase();

    for(let i = 0; i < arrayStr.length; i++) {
        let lowerStr = arrayStr[i].toLowerCase();
        if (lowerStr.indexOf(str) == -1) {
            newArray += arrayStr[i];
            if (i !== arrayStr.length - 1)
                newArray += " ";
        }
    }
    return newArray;
}


let argv = process.argv.slice(2);
let str = argv.pop();


console.log(eraseArray(argv, str));

