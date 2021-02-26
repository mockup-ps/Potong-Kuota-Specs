const header = require('../model/header');  
const kendalikuota = require('../model/kendalikuota');
const komoditi = require('../model/komoditi');
const subkomoditi = require('../model/subkomoditi')
const kuota = require('../model/kuota');
const { get } = require('../routes');


const getTableMonitoringKuota = async (req, res) => {
  try {
    var tabledata = await header.findAll({
        raw: true,
        limit : req.params.limit,
        offset : req.params.offset
    })
    for (x in tabledata){
        const komoditidata = await komoditi.findAll({
            include:kuota,
            where: {
                id_header: tabledata[x].id_header
            }
        })
        // tabledata[x].komoditi = komoditidata
        var kuotafalse = []
        const komoditidatafalse = await komoditi.findAll({
            include:kuota,
            where: {
                id_header: tabledata[x].id_header,
                flag_sub_komoditi:false
            }
        })
        for (l in komoditidatafalse){
            kuotafalse.push(komoditidatafalse[l].td_kuotum.jml_sisa)
        }
        var kuotatrue = []
        const komoditidatatrue = await komoditi.findAll({
            where: {
                id_header: tabledata[x].id_header,
                flag_sub_komoditi:true
            }
        })
        for (o in komoditidatatrue){
            console.log("cukii", komoditidatatrue[o].id_komoditi)
            const subkomoditidata = await subkomoditi.findAll({
                include:kuota,
                where:{
                    id_komoditi:komoditidatatrue[o].id_komoditi
                }
            })            
            for (p in subkomoditidata){
                kuotatrue.push(subkomoditidata[p].td_kuotum.jml_sisa)
            }
        }
        var kuotaheader = kuotafalse.concat(kuotatrue)
        if(Math.max(...kuotaheader)>0){
            tabledata[x].statuskuota = "Tersedia"
        } else {
            tabledata[x].statuskuota = "Habis"           
        }        
    }
    return res.status(200).json({
      data:tabledata
    })
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
}

module.exports = getTableMonitoringKuota