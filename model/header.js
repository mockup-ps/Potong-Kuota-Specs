const Sequelize = require('sequelize');
const db = require('../config');

const header = db.define('td_header', {
    id_header: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    status_dokumen: {
        type: Sequelize.STRING,
        allowNull: true
    },
    kd_jns_dokumen: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    kd_jns_dokumen_final: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    jns_skbppn: {
        type: Sequelize.STRING,
        allowNull: true
    },
    jns_pengajuan: {
        type: Sequelize.STRING,
        allowNull: true
    },
    no_pengajuan: {
        type: Sequelize.STRING,
        allowNull: true
    },
    upload_by: {
        type: Sequelize.STRING,
        allowNull: true
    },
    kd_perijinan: {
        type: Sequelize.STRING,
        allowNull: true
    },
    kd_jns_perijinan: {
        type: Sequelize.STRING,
        allowNull: true
    },
    no_perijinan: {
        type: Sequelize.STRING,
        allowNull: true
    },
    tgl_perijinan: {
        type: Sequelize.DATEONLY,
        allowNull: true
    },
    tgl_awal_perijinan: {
        type: Sequelize.DATEONLY,
        allowNull: true
    },
    tgl_akhir_perijinan: {
        type: Sequelize.DATEONLY,
        allowNull: true
    },
    wk_pengiriman: {
        type: Sequelize.DATE,
        allowNull: true
    },
    kd_ga: {
        type: Sequelize.STRING,
        allowNull: true
    },
    kd_tipe_trader: {
        type: Sequelize.STRING,
        allowNull: true
    },
    kd_jns_id: {
        type: Sequelize.STRING,
        allowNull: true
    },
    npwp: {
        type: Sequelize.STRING,
        allowNull: true
    },
    nib: {
        type: Sequelize.STRING,
        allowNull: true
    },
    nama: {
        type: Sequelize.STRING,
        allowNull: true
    },
    alamat: {
        type: Sequelize.STRING,
        allowNull: true
    },
    kd_pos: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    kd_kota: {
        type: Sequelize.STRING,
        allowNull: true
    },
    kd_propinsi: {
        type: Sequelize.STRING,
        allowNull: true
    },
    kd_negara: {
        type: Sequelize.STRING,
        allowNull: true
    },
    telp: {
        type: Sequelize.STRING,
        allowNull: true
    },
    fax: {
        type: Sequelize.STRING,
        allowNull: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: true
    },
    url_doc: {
        type: Sequelize.STRING,
        allowNull: true
    }
},{
    schema: 'nsw_potong_kuota5',
    freezeTableName: true
});

module.exports = header;