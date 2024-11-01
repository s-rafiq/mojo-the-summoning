const { db, DataTypes } = require("../db/config");

const Deck = db.define("Deck", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true, 
        autoIncrement: true 
    },
    name: {
        type: DataTypes.STRING
    },
    mojo: {
        type: DataTypes.INTEGER
    },
    stamina: {
        type: DataTypes.INTEGER
    },
    imgUrl: {
        type: DataTypes.STRING
    }
});

module.exports = Deck;
