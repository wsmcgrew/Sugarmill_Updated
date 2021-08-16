var config = require('../dbconfig');
const sql = require('mssql');

console.log("in the growers controller")
async function getGrowers() {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query("select * from Cane_Loads a JOIN Mills b ON b.MillId = a.MillId");
        console.log("did it work");
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function getGrowerCaneLoads(growerId) {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query(`select * FROM Growers a JOIN Cane_Loads b on (b.GrowerId = ${growerId} and a.GrowerId = ${growerId})`);
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function getCompanyName(growerId) {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query(`select CompanyName FROM Growers WHERE GrowerId = ${growerId}`);
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = {
    getGrowers: getGrowers,
    getGrowerCaneLoads: getGrowerCaneLoads,
    getCompanyName: getCompanyName
}