const fs = require("fs");

function writeJson(data) {
    fs.writeFileSync('./object.json', JSON.stringify(data));
}

writeJson({
    nama: "Sharfina Mahdiya",
    class: "FSW 20 Full Stack Web Development",
    tempat: "Binar Academy"
})