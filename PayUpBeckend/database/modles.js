const Sequelize = require("sequelize");
const DB = require("../config.json").DB;
const datatypes = Sequelize.DataTypes;

const db = new Sequelize(DB.DATABASE, DB.USER, DB.PASSWORD, {
    host: DB.HOST,
    dialect: DB.DIALECT,
    // logging: false
});

const Friends = db.define('friends', {
    name: {
        type: datatypes.STRING,
        primaryKey: true,
        allowNull: false
    }
}, {
    freezeTableName: true
});

const Transactions = db.define('transactions', {
    id: {
        type: datatypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: datatypes.STRING,
        // foreignKey: true,
        allowNull: false
    },
    amount: {
        type: datatypes.INTEGER,
        allowNull: false
    }
}, {
    freezeTableName: true
});



Promise.all([Friends.sync(), Transactions.sync()])
.then(console.log("Database connected"))
.catch(err => console.error(err));

exports = module.exports = {
    Friends,
    Transactions
};