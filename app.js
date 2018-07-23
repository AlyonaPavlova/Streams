const fs = require("fs");
// const { Readable } = require("stream");

const file = process.argv;

fs.createReadStream(file)
    .pipe()
    .pipe(fs.createWriteStream(file + ""));



