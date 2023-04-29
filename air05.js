/* Programme qui est capable de reconnaître et de faire une opération (addition ou soustraction) sur chaque entier d’une liste.
*/

function parseArgs(args) {

    for (let i = 0; i < args.length; i++) {
        if (isNaN(Number(args[i]))) {
            console.error("erreur, seul les nombres sont acceptés");
            process.exit(1);
        }
    }
    return args;
}

function display(argv) {
    let newArray = "";
    for (let i = 0; i < argv.length; i++) {
        newArray += argv[i];
        if (i != argv.length -1)
            newArray += " ";
    }
    return newArray;
}

function myCalculator(args) {
    let result = [];

    if (!args || args.length < 2) {
        console.error("erreur, le nombre d'argument est incorrecte");
        process.exit(1);
    }
    parseArgs(args);
    let operation = args[args.length -1];

    for (let i = 0; i < args.length - 1; i++) {
        if (operation[0] === '+') {
            operation.slice(1);
            result[i] = Number(args[i]) + operation;
        }
        else if (operation[0] === '-') {
            operation.slice(1);
            result[i] = Number(args[i]) - operation;
        }
        else
            return "erreur";

    }
    
    let newArray = display(result);
    return newArray;
}

let args = process.argv.slice(2);

console.log(myCalculator(args));