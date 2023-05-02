/*  programme qui affiche le contenu d’un fichier donné en argument. */

function readFileArg(arg)
{
    const fs = require("fs");
    if (!arg){
        return("erreur : argument");
    }
    fs.readFile(arg, "utf-8" , (err, data) => {
        if (err) {
            return("erreur lecture du fichier");
        }
        console.log(data);
    });
}

arg = process.argv[2];
readFileArg(arg);