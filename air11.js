/* Afficher un escalier constitué d’un caractère et d’un nombre d’étages donné en paramètre. */

function drawPyramide(char, nbEtage) 
{
    let draw = "";
    if (!char || !nbEtage || isNaN(Number(nbEtage)) || nbEtage < 1) {
        return "Erreur : argument incorrect";
    }

    for (let i = 1; i <= nbEtage; i++) {
        const nbEspace = nbEtage - i;
        const nbChar = i + (i - 1);
        draw += " ".repeat(nbEspace) + char.repeat(nbChar);
        if (i != nbEtage) {
            draw += '\n';   
        }
    }
    return draw;
}

module.exports = drawPyramide;

//let char = process.argv[2];
//let nbEtage = process.argv[3];
//
//console.log(drawPyramide(char, nbEtage));
//console.log(drawPyramide("",5));