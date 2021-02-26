const Sequelize = require('sequelize');
const db = require('../config');

const kuota = db.define('td_kuota', {
    id_kuota: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    jml_kuota: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    jml_terpakai: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    jml_sisa: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
},{
    schema: 'nsw_potong_kuota5',
    freezeTableName: true
});

module.exports = kuota;