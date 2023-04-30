function displayStrArray(argv) {
    let newArray = "";
    for (let i = 0; i < argv.length; i++) {
        newArray += argv[i];
        if (i != argv.length -1)
            newArray += " ";
    }
    console.log(newArray);
}

function displayTab(tab){
    for(let i = 0; i < tab.length; i++)
      {
        console.log(tab[i]);
      }
}

module.exports = {displayStrArray, displayTab};