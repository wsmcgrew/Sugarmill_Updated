module.exports = function(sequelize, Sequelize) {
 
    var Mills = sequelize.define('Mills', {

        MillId: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        Mill_Name: {
            type: Sequelize.STRING,
            notEmpty: true
        }
    });
 
    return Mills;
 
}