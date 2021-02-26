const Sequelize = require('sequelize');
const db = require('../config');
const kuota = require('./kuota');
const komoditi = require('./komoditi')

const subkomoditi = db.define('td_subkomoditi', {
    id_subkomoditi: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_komoditi: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    id_kuota: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    serial: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    kd_hs: {
        type: Sequelize.STRING,
        allowNull: false
    },
    uraian: {
        type: Sequelize.STRING,
        allowNull: false
    },
    kd_jns_satuan: {
        type: Sequelize.STRING,
        allowNull: false
    }      
},{
    schema: 'nsw_potong_kuota5',
    freezeTableName: true
});
subkomoditi.belongsTo(kuota, {
    foreignKey: 'id_kuota'
})
subkomoditi.belongsTo(komoditi, {
    foreignKey: 'id_komoditi'
})

module.exports = subkomoditi;