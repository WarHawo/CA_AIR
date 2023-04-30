/*un programme qui trie une liste de nombres ==> l’algorithme du tri rapide (QuickSort). */

function quickSort(array) {
    if (!array) {
        console.error("erreur: argtument");
        return ;
    }
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

function displayTab(argv) {
    let newArray = "";
    for (let i = 0; i < argv.length; i++) {
        newArray += argv[i];
        if (i != argv.length -1)
            newArray += " ";
    }
    return newArray;
}


array = process.argv.slice(2);
console.log(displayTab(quickSort(array)));