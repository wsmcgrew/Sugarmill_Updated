module.exports = function(sequelize, Sequelize) {
 
    var Growers = sequelize.define('Growers', {

        GrowerId: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        Users_Name: {
            type: Sequelize.STRING,
            notEmpty: true
        },
        EmailAddress: {
            type: Sequelize.STRING,
            validate: {
                isEmail: true
            }
        },
        Password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        CompanyName: {
            type: Sequelize.STRING,
            notEmpty: true
        }
    });
 
    return Growers;
 
}