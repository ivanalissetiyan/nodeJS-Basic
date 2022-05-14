// var fs = require("fs");

// fs.copyFileSync("text.txt", "text2.txt");
// console.log("Saved!");

// const superheroes = require("superheroes");

// for (i = 0; i < 20; i++) {
//   console.log(superheroes.random());
// }

const op = require("./module");
const moduleTitle = op.title;
const moduleTambah = op.tambah(10, 5);
const modulePerkalian = op.perkalian(5, 5);
const modulePembagian = op.pembagian(10, 2);

console.log(moduleTitle);
console.log(moduleTambah);
console.log(modulePerkalian);
console.log(modulePembagian);
