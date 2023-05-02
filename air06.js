/* programme qui supprime d’un tableau tous les éléments qui ne contiennent pas une autre chaîne de caractères.
*/

function eraseArray(arrayStr, str) 
{
    let newArray = [];

    if (!arrayStr || arrayStr.length < 1) {
        return "Erreur : argument incorrect";
    }

    if (str.length > 1)
        return "Seulement un caractères est accepté en dernier argument";
    str = str.toLowerCase();

    for(let i = 0; i < arrayStr.length; i++) {
        let lowerStr = arrayStr[i].toLowerCase();
        if (lowerStr.indexOf(str) == -1) {
            newArray.push(arrayStr[i]);
        }
    }
    return newArray;
}

module.exports = eraseArray;

//let argv = process.argv.slice(2);
//let arg = argv.slice(0, -1);
//let str = argv[argv.length - 1];
//console.log(eraseArray(arg, str));
//console.log(eraseArray(["Albert", "Thomas", "Erica"], "e"));