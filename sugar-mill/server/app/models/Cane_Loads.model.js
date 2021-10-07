
module.exports = function(sequelize, Sequelize) {
 
    var Cane_Loads = sequelize.define('Cane_Loads', {

        MillId: {
            type: Sequelize.INTEGER,
            notEmpty: true
        },
        Millcr: {
            type: Sequelize.INTEGER,
            notEmpty: true
        },
        GrowerId: {
            type: Sequelize.STRING,
            notEmpty: true
        },
        GrowerName: {
            type: Sequelize.STRING,
            notEmpty: true
        },
        TractId: {
            type: Sequelize.STRING,
            notEmpty: true
        },
        TractName: {
            type: Sequelize.STRING,
            notEmpty: true
        },
        HaulerId: {
            type: Sequelize.STRING,
            notEmpty: true
        },
        HaulerName: {
            type: Sequelize.STRING,
            notEmpty: true
        },
        TruckId: {
            type: Sequelize.STRING,
            notEmpty: true
        },
        TrailerId: {
            type: Sequelize.STRING,
            notEmpty: true
        },
        GrossWt: {
            type: Sequelize.STRING,
            notEmpty: true
        },
        TareWt: {
            type: Sequelize.STRING,
            notEmpty: true
        },
        NetWt: {
            type: Sequelize.STRING,
            notEmpty: true
        },
        GrossTime: {
            type: Sequelize.DATE,
            notEmpty: true
        },
        TareTime: {
            type: Sequelize.DATE,
            notEmpty: true
        },
        OverWeight: {
            type: Sequelize.BOOLEAN
        },
        IsAltered: {
            type: Sequelize.BOOLEAN
        },
        LastUpdatedBy: {
            type: Sequelize.STRING
        },
        LoadId: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        }
    });
 
    return Cane_Loads;
 
}