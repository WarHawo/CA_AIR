/* Afficher un escalier constitué d’un caractère et d’un nombre d’étages donné en paramètre. */

function drawPyramide(char, nbEtage) 
{
    if (!char || !nbEtage || isNaN(Number(nbEtage)) || nbEtage < 1) {
     console.error("erreur: argument");
     process.exit(1);
    }

    for (let i = 1; i <= nbEtage; i++) {
        const nbEspace = nbEtage - i;
        const nbChar = i + (i - 1);
        console.log(" ".repeat(nbEspace) + char.repeat(nbChar));
    }
}


let char = process.argv[2];
let nbEtage = process.argv[3];

drawPyramide(char, nbEtage);
