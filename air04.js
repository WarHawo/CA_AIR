/* programme qui affiche une chaîne de caractères en évitant les caractères identiques adjacents.*/

  function oneCharOnly(str) {
    if (!str || typeof str !== "string") {
      return "Erreur : argument incorrect";
    }
  
    let newStr = str[0];
    for (let i = 1; i < str.length; i++) {
      if (str[i] !== str[i - 1]) {
        newStr += str[i];
      }
    }
    return newStr;
  }
  module.exports = oneCharOnly;
//args = process.argv.slice(2);
//console.log(oneCharOnly('SSaalut aaaaaaamiiiiiss'));