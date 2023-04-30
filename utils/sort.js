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

module.exports = {isSorted, sortArray};