/* programme qui décale tous les éléments d’un tableau vers la gauche. Le premier élément devient le dernier à chaque rotation.
*/

const {displayStrArray, displayTab} = require('./utils/display');

function maRotation(array)
{
    let newStr = [];
    if (!array || array.length < 1) {
        return "Erreur : argument incorrect";
    }
    newStr[array.length - 1] = array[0];
    for (let i = 0; i < array.length - 1; i++) {
        newStr[i] = array[i + 1];
    }
    return newStr;
}

module.exports = maRotation;

//argv = process.argv.slice(2);
//displayStrArray(maRotation(argv));
