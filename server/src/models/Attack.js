const { db, DataTypes } = require("../db/config");

const Attack = db.define("Attack", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true, 
        autoIncrement: true 
    },
    title: {
        type: DataTypes.STRING
    },
    mojoCost: {
        type: DataTypes.INTEGER
    },
    staminaCost: {
        type: DataTypes.INTEGER
    }
});

module.exports = Attack;
