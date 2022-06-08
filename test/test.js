const mdb = require("../db/db");

mdb.create("juba 1", 10);
mdb.create("zayed 1", 10);
mdb.create("bart 1", 10);
mdb.create("platihelminthes 1", 10);
mdb.create("cnimatoda 1", 10);
mdb.create("annilida 1", 10);

const bluk = mdb.bulkCreate("vartribrata", 10, 4);
console.log("bluck", bluk);
const tici = mdb.find();
console.log("all tick", tici.length);
const winn = mdb.draw(3);
console.log("winnwer", winn);
