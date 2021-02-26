const Sequelize = require('sequelize');
const db = require('../config');

const referensi = db.define('td_referensi', {
    id_referensi: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_header: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    kd_jns_dokumen: {
        type: Sequelize.STRING,
        allowNull: false
    },
    no_dokumen: {
        type: Sequelize.STRING,
        allowNull: false
    },
    tgl_dokumen: {
        type: Sequelize.DATEONLY,
        allowNull: true
    }, 
    url_dokumen: {
        type: Sequelize.STRING,
        allowNull: false
    },       
    kd_ga: {
        type: Sequelize.STRING,
        allowNull: false
    }
},{
    schema: 'nsw_potong_kuota5',
    freezeTableName: true
});

module.exports = referensi;