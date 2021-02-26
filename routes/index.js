const express = require('express');
const router = express.Router();
const postIzin = require('../controller/postIzin');
const getTableMonitoringKuota = require('../controller/getTableMonitoringKuota');
const getHeader = require('../controller/getHeader')
const getHeaderNegara = require('../controller/getHeaderNegara')
const getHeaderPelabuhan = require('../controller/getHeaderPelabuhan')
const getHeaderReferensi = require('../controller/getHeaderReferensi')
const getAllKomoditi = require('../controller/getAllKomoditi')
const getKomoditiDetail = require('../controller/getKomoditiDetail')
const getKomoditiNegara = require('../controller/getKomoditiNegara')
const getKomoditiPelabuhan = require('../controller/getKomoditiPelabuhan')
const getSubkomoditi = require('../controller/getSubkomoditi')

router.post('/postIzin', postIzin);
router.get('/getTableMonitoringKuota/:limit/:offset', getTableMonitoringKuota)
router.get('/getHeader/:idheader', getHeader)
router.get('/getHeaderNegara/:idheader', getHeaderNegara)
router.get('/getHeaderPelabuhan/:idheader', getHeaderPelabuhan)
router.get('/getHeaderReferensi/:idheader', getHeaderReferensi)
router.get('/getAllKomoditi/:idheader', getAllKomoditi)
router.get('/getKomoditiDetail/:idkomoditi', getKomoditiDetail)
router.get('/getKomoditiNegara/:idkomoditi', getKomoditiNegara)
router.get('/getKomoditiPelabuhan/:idkomoditi',getKomoditiPelabuhan)
router.get('/getSubkomoditi/:idkomoditi', getSubkomoditi)
module.exports = router;