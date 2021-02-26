const Sequelize = require('sequelize');
const db = require('../config');
const kuota = require('./kuota');

const komoditi = db.define('td_komoditi', {
    id_komoditi: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_header: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    id_kuota: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    seri: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    kd_hs: {
        type: Sequelize.STRING,
        allowNull: false
    },
    asal_barang: {
        type: Sequelize.STRING,
        allowNull: false
    },        
    flag_perubahan: {
        type: Sequelize.STRING,
        allowNull: false
    },    
    kd_jns_satuan: {
        type: Sequelize.STRING,
        allowNull: false
    },    
    bm: {
        type: Sequelize.INTEGER,
        allowNull: false
    },            
    ppn: {
        type: Sequelize.INTEGER,
        allowNull: false
    },     
    uraian: {
        type: Sequelize.STRING,
        allowNull: false
    },       
    nilai_total_barang: {
        type: Sequelize.INTEGER,
        allowNull: false
    },      
    flag_sub_komoditi: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },  
    flag_komoditi: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },         
},{
    schema: 'nsw_potong_kuota5',
    freezeTableName: true
});

komoditi.belongsTo(kuota, {
    foreignKey: 'id_kuota'
})

module.exports = komoditi;