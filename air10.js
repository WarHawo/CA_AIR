/*  programme qui affiche le contenu d’un fichier donné en argument. */

function readFileArg(arg)
{
    const fs = require("fs");
    if (!arg){
        console.error("erreur : argument");
        process.exit(1);
    }
    fs.readFile(arg, "utf-8" , (err, data) => {
        if (err) {
            console.error(err);
            return ;
        }
        console.log(data);
    });
}

arg = process.argv[2];
readFileArg(arg);