/* programme qui ajoute à une liste d’entiers triée un nouvel entier tout en gardant la liste triée dans l’ordre croissant.
Le dernier argument est l’élément à ajouter. */

const parseNumber = require('./utils/parseNumber'); 
const {isSorted, sortArray} = require('./utils/sort');
const {displayStrArray, displayTab} = require('./utils/display');


function sortedInsert(array, newElem)
{
    let str = [];

    parseNumber(array);
    parseNumber(newElem);

    if (!array || !newElem) {
        return "Erreur : argument incorrect";
    }

    if (!isSorted(array)) {
        return("Erreur: le tableau en argument doit etre trié");
    }

    for (let i = 0; i < array.length; i++) {
        str [i] = Number(array[i]);
    }
    str[str.length] = Number(newElem);
    let newArray = sortArray(str);

    return newArray;
}
module.exports = sortedInsert;

//let argv = process.argv.slice(2);
//let array = argv.slice(0, -1);
//let newElem = argv[argv.length - 1];
//displayStrArray(sortedInsert(array, newElem)); 
