/* programme qui ajoute à une liste d’entiers triée un nouvel entier tout en gardant la liste triée dans l’ordre croissant.
Le dernier argument est l’élément à ajouter. */


function parseArgs(args) {

    for (let i = 0; i < args.length; i++) {
        if (isNaN(Number(args[i]))) {
            console.error("erreur, seul les nombres sont acceptés");
            process.exit(1);
        }
    }
    return args;
}

function isSorted(arg)
{
    let num = [];
    for (let i = 0, j = 0; i < arg.length; i++) {
        num[j]= Number(arg[i]);
        j++;
    }

    for (let i = 0; i < num.length - 1 ; i++) {
        if (num[i] > num[i + 1])
        return false;
    }
    
    return true;
}

function sortArray(array) {
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (Number(array[i]) > Number(array[j])) {
          let temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
      }
    }
    return array;
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

function sortedInsert(array, newElem)
{
    let str = [];

    parseArgs(array);
    parseArgs(newElem);

    if (!array || !newElem) {
        console.error("erreur");
        process.exit(1);
    }

    if (!isSorted(array))
        return "le tableau doir etre trié";

    for (let i = 0; i < array.length; i++) {
        str [i]= Number(array[i]);
    }
    str[str.length] = Number(newElem);
    let newArray = displayTab(sortArray(str));

    return newArray;
}

let array = process.argv.slice(2);
let newElem = array.pop();

console.log(sortedInsert(array, newElem));