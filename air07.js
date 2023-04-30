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
        console.error("erreur : argument");
        process.exit(1);
    }

    if (!isSorted(array)) {
        console.error("erreur: le premier tableau doit etre triee ");
        process.exit(1);
    }

    for (let i = 0; i < array.length; i++) {
        str [i]= Number(array[i]);
    }
    str[str.length] = Number(newElem);
    let newArray = sortArray(str);

    return newArray;
}

let array = process.argv.slice(2);
let newElem = array.pop();

displayStrArray(sortedInsert(array, newElem)); 
