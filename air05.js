/* Programme qui est capable de reconnaître et de faire une opération (addition ou soustraction) sur chaque entier d’une liste.
*/
const {displayStrArray, displayTab} = require('./utils/display');
const parseNumber = require('./utils/parseNumber');

function myCalculator(args) {
    if (!args || args.length < 2) {
        return("erreur, le nombre d'argument est incorrecte");
    }
    parseNumber(args);

    let num ="";
    let result = [];
    let operation = args[args.length -1];
    
    for(let i = 1; i < operation.length; i++) {
        num += operation[i];
    }

    for (let i = 0; i < args.length - 1; i++) {
        if (operation[0] === '+') {
            result[i] = Number(args[i]) + Number(num);
        }
        else if (operation[0] === '-') {
            result[i] = Number(args[i]) - Number(num);
        }
        else {
            return("erreur, operation");
        }
    }
    return result;
}

//let args = process.argv.slice(2);
//
//displayStrArray(myCalculator(args));