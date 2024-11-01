const { db, DataTypes } = require("../db/config");

const Card = db.define("Card", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true, 
        autoIncrement: true 
    },
    username: {
        type: DataTypes.STRING
    },
    xp: {
        type: DataTypes.INTEGER
    }
});

module.exports = Card;