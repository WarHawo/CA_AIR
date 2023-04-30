function parseNumber(args) {
    if (!args) {
        console.error("erreur : argument");
        process.exit(1);
    }
    for (let i = 0; i < args.length; i++) {
        if (isNaN(Number(args[i]))) {
            console.error("erreur, seul les nombres sont acceptés");
            process.exit(1);
        }
    }
    return args;
}

module.exports = parseNumber;