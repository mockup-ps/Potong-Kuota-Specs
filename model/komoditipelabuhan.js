const Sequelize = require('sequelize');
const db = require('../config');

const komoditipelabuhan = db.define('td_komoditipelabuhan', {
    id_komoditi_pelabuhan: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_komoditi: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    kd_pelabuhan: {
        type: Sequelize.STRING,
        allowNull: false
    },
    kd_jns_kegiatan: {
        type: Sequelize.STRING,
        allowNull: false
    }
},{
    schema: 'nsw_potong_kuota5',
    freezeTableName: true
});

module.exports = komoditipelabuhan;