const Sequelize = require('sequelize');
const db = require('../config');

const headernegara = db.define('td_headernegara', {
    id_header_negara: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_header: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    kd_negara: {
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

module.exports = headernegara;