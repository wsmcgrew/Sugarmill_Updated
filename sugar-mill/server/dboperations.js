var config = require('./dbconfig');
const sql = require('mssql');


async function getGrowers() {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query("select * from Cane_Loads a JOIN Mills b ON b.MillId = a.MillId");
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function getGrowerCaneLoads(growerId) {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query(`select *
        FROM Growers a JOIN Cane_Loads b on a.GrowerId = ${growerId} and  b.GrowerId = ${growerId} INNER join Mills c on c.MillId = b.MillId`);
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

async function getTracts() {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query("select * from Tracts");
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function changeTract(id, LastUpdatedBy, TractId, TractName) {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request()
        .query(` update Cane_Loads
        set IsAltered = 1, LastUpdatedBy = ${LastUpdatedBy}, TractId = ${TractId}, TractName = ${TractName}
        where id = ${id}
        `);
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}


module.exports = {
    getGrowers: getGrowers,
    getGrowerCaneLoads: getGrowerCaneLoads,
    getTracts: getTracts,
    changeTract: changeTract
}