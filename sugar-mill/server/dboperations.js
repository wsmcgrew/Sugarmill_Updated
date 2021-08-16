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

/*
async function getOrder(orderId) {
    try {
        let pool = await sql.connect(config);
        let product = await pool.request()
            .input('input_parameter', sql.Int, orderId)
            .query("SELECT * from Orders where Id = @input_parameter");
        return product.recordsets;

    }
    catch (error) {
        console.log(error);
    }
}


async function addOrder(order) {

    try {
        let pool = await sql.connect(config);
        let insertProduct = await pool.request()
            .input('Id', sql.Int, order.Id)
            .input('Title', sql.NVarChar, order.Title)
            .input('Quantity', sql.Int, order.Quantity)
            .input('Message', sql.NVarChar, order.Message)
            .input('City', sql.NVarChar, order.City)
            .execute('InsertOrders');
        return insertProduct.recordsets;
    }
    catch (err) {
        console.log(err);
    }
}*/

module.exports = {
    getGrowers: getGrowers,
    getGrowerCaneLoads: getGrowerCaneLoads,
    getCompanyName: getCompanyName
}