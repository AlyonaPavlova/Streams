const fs = require("fs");

const file = process.argv[2];
const strings = process.argv[3];

let stream = fs.createReadStream(file, { encoding : "utf8" });

stream.on("data", function(chunk){
    let data = chunk.split("\n");

    data.slice(-strings).forEach(key => {
        console.log(key);
    });
});
