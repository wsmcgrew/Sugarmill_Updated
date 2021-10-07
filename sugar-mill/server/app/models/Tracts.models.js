module.exports = function(sequelize, Sequelize) {
 
    var Tracts = sequelize.define('Tracts', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        MillId: {
            type: Sequelize.INTEGER,
            notEmpty: true
        },
        TractId: {
            type: Sequelize.STRING,
            notEmpty: true
        },
        TractName: {
            type: Sequelize.STRING,
            notEmpty: true
        }
    });
 
    return Tracts;
 
}