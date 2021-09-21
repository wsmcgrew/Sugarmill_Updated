var config = require('./dbconfig');
const sql = require('mssql');
const { pool } = require('./dbconfig');


async function getGrowers() {
    try {
        let pool = await sql.connect(config);
        const queryStatement = ("select * from Cane_Loads a JOIN Mills b ON b.MillId = a.MillId");
        const prepair = new sql.PreparedStatement(pool);
              
        prepair.prepare(queryStatement, err => {
            console.log(err)
            prepair.execute(queryStatement, err =>{
                console.log(err);

                prepair.unprepare(err => {
                    console.log(err);
                })
            });
        })
          /*
        let pool = await sql.connect(config);
        let products = await pool.request().query("select * from Cane_Loads a JOIN Mills b ON b.MillId = a.MillId");
        return products.recordsets;
        */
    }
    catch (error) {
        console.log(error);
    }
}

async function getGrowerCaneLoads(growerId) {
    try {
        const query = (`select *
            FROM Growers a JOIN Cane_Loads b on a.GrowerId = ${growerId} and  b.GrowerId = ${growerId} 
            INNER join Mills c on c.MillId = b.MillId`);

        let pool = await sql.connect(config);
        let products = await pool.request().query(`select *
        FROM Growers a JOIN Cane_Loads b on a.GrowerId = ${growerId} and  b.GrowerId = ${growerId} INNER join Mills c on c.MillId = b.MillId`);
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

// DONT FUCKING TOUCH SHANE! I WILL KICK YOUR ASS
async function changeTract(id, LastUpdatedBy, TractId, TractName) {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request()
        .input('id', sql.Int, id)
        .input("LastUpdatedBy", sql.VarChar, LastUpdatedBy)
        .input("TractId", sql.VarChar, TractId)
        .input("TractName", sql.VarChar, TractName)
        .input("IsAltered", sql.Int, 1)
        .execute('spChangeTracts')

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