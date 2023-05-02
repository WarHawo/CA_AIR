/*  programme qui affiche le contenu d’un fichier donné en argument. */

function readFileArg(arg) {
    const fs = require("fs");

    if (fs.existsSync(arg)) {
        const data = fs.readFileSync(arg, "utf-8");
        return data;
    } else {
        return "Erreur: aucun fichier de ce nom";
    }
}
module.exports = readFileArg;

//arg = process.argv[2];
//console.log(readFileArg(arg));