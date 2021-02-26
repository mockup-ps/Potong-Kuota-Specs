const Sequelize = require('sequelize');
const db = require('../config');

const kendalikuota = db.define('td_kendalikuota', {
    id_kendali_kuota: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_kuota: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    jumlah: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
},{
    schema: 'nsw_potong_kuota5',
    freezeTableName: true
});

module.exports = kendalikuota;