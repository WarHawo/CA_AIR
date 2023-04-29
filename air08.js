/*programme qui fusionne deux listes d’entiers triées en les gardant triées, les deux listes seront séparées par un “fusion”.
*/

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
  
function sortedFusion(arr1,arr2)
{
    const newArray = [];
    let i = 0, j = 0;

    while (i < arr1.length) {
        newArray.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        newArray.push(arr2[j]);
        j++;
    }

    let arr = displayTab(sortArray(newArray));

    return arr;
}

const args = process.argv.slice(2);
const index = args.indexOf("fusion");

if (index < 0 || index === 0 || index === args.length - 1) {
  console.error("Erreur : format des arguments invalide.");
  process.exit(1);
}
const array1 = args.slice(0, index).map(Number);
const array2 = args.slice(index + 1).map(Number);

console.log(sortedFusion(array1, array2));