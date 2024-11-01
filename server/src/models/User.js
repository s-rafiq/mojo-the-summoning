const { db, DataTypes } = require("../db/config");

const User = db.define("User", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true, 
        autoIncrement: true 
    },
    username: {
        type: DataTypes.STRING
    },
});

module.exports = User;
