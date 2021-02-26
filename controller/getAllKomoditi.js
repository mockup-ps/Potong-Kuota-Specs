const komoditi = require('../model/komoditi')
const kuota = require('../model/kuota')
const subkomoditi = require('../model/subkomoditi')


const getAllKomoditi = async (req, res) => {
  try {
    const komoditidata = await komoditi.findAll({
        include:{
          model:kuota,
          attributes: { exclude: ['createdAt','updatedAt'] }
        },
        attributes: { exclude: ['createdAt','updatedAt'] },
        where:{
            id_header : req.params.idheader
        },
        raw : true,
        nest:true
    })
    for (x in komoditidata){
      if(komoditidata[x].flag_sub_komoditi == false){
        if (komoditidata[x].td_kuotum.jml_sisa > 0){
          komoditidata[x].statuskuota = "tersedia"
        } else {
          komoditidata[x].statuskuota = "habis"
        }
        komoditidata[x].jml_kuota = komoditidata[x].td_kuotum.jml_kuota
        komoditidata[x].jml_terpakai = komoditidata[x].td_kuotum.jml_terpakai
        komoditidata[x].jml_sisa = komoditidata[x].td_kuotum.jml_sisa
        delete komoditidata[x].td_kuotum
      } else {
        var kuotasubkomoditi = []
        const subkomoditidata = await subkomoditi.findAll({
          include:{
            model:kuota,
            attributes:{ exclude:['createdAt', 'updatedAt']}
          },
          attributes:{ exclude:['createdAt', 'updatedAt']},
          where:{
              id_komoditi : komoditidata[x].id_komoditi
          },
          raw : true,
          nest:true          
        })
        for (o in subkomoditidata){
          kuotasubkomoditi.push(subkomoditidata[o].td_kuotum.jml_sisa)
        }
        if(Math.max(...kuotasubkomoditi)>0){
          komoditidata[x].statuskuota = "tersedia"
        }
        komoditidata[x].jml_kuota = null
        komoditidata[x].jml_terpakai = null
        komoditidata[x].jml_sisa = null
        delete komoditidata[x].td_kuotum
      }
    }
    return res.status(200).json({
      data:komoditidata
    })
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
}

module.exports = getAllKomoditi