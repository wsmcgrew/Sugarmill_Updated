module.exports = function(sequelize, Sequelize) {
 
    var Grower_Mill = sequelize.define('Grower_Mill', {

        UniqueId: {
            autoIncrement: true,
            primaryKey: true,
            notEmpty: true,
            type: Sequelize.INTEGER
        },
        MillId: {
            type: Sequelize.INTEGER,
            notEmpty: true
        }
    });
 
    return Grower_Mill;
 
}