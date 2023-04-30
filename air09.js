/* programme qui décale tous les éléments d’un tableau vers la gauche. Le premier élément devient le dernier à chaque rotation.
*/

function displayTab(argv) {
    let newArray = "";
    for (let i = 0; i < argv.length; i++) {
        newArray += argv[i];
        if (i != argv.length -1)
            newArray += " ";
    }
    return newArray;
}

function maRotation(array)
{
    let newStr = [];
    if (!array || array.length < 1) {
        console.error("erreur : argument");
        process.exit(1);
    }
    newStr[array.length - 1] = array[0];
    for (let i = 0; i < array.length - 1; i++) {
        newStr[i] = array[i + 1];
    }
    return displayTab(newStr);
}

argv = process.argv.slice(2);
console.log(maRotation(argv));