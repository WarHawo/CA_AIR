/*un programme qui trie une liste de nombres ==> l’algorithme du tri rapide (QuickSort). */

const {displayStrArray, displayTab} = require('./utils/display');
const parseNumber = require('./utils/parseNumber'); 

function quickSort(array) {
    parseNumber(array);

    if (array.length <= 1)
        return array;

    const pivot = array[0];
    let left = [];
    let right = [];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < pivot) 
            left.push(array[i]);
        else
            right.push(array[i]); 
    }
    return quickSort(left).concat([pivot], quickSort(right));
}

module.exports = quickSort;

//array = process.argv.slice(2);
//displayStrArray(quickSort(array));

//console.log(quickSort([]));