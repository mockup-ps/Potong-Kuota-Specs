const komoditi = require('../model/komoditi');
const kuota = require('../model/kuota');
const subkomoditi = require('../model/subkomoditi');  


const getSubkomoditi = async (req, res) => {
  try {
    const subkomoditidata = await subkomoditi.findAll({
        include:[
            {
                model:kuota,
                attributes:{exclude:['createdAt','updatedAt']}
            },
            {
                model:komoditi
            }
        ],
        where:{
            id_komoditi : req.params.idkomoditi
        },
        attributes:{exclude:['createdAt', 'updatedAt']},
        raw:true,
        nest:true
    })
    for (x in subkomoditidata){
        var flagkomoditi = subkomoditidata[x].td_komoditi.flag_komoditi
        var flagsubkomoditi = subkomoditidata[x].td_komoditi.flag_sub_komoditi
        if(flagkomoditi == true && flagsubkomoditi == false ){
            subkomoditidata[x].statuskuota = null
            subkomoditidata[x].jml_kuota = null
            subkomoditidata[x].jml_terpakai = null
            subkomoditidata[x].jml_sisa = null     
            delete subkomoditidata[x].td_kuotum    
            delete subkomoditidata[x].td_komoditi           
        } else {
            if(subkomoditidata[x].td_kuotum.jml_sisa > 0){
                subkomoditidata[x].statuskuota = "tersedia"
            } else {
                subkomoditidata[x].statuskuota = "habis"
            }
            subkomoditidata[x].jml_kuota = subkomoditidata[x].td_kuotum.jml_kuota
            subkomoditidata[x].jml_terpakai = subkomoditidata[x].td_kuotum.jml_terpakai
            subkomoditidata[x].jml_sisa = subkomoditidata[x].td_kuotum.jml_sisa
            delete subkomoditidata[x].td_kuotum  
            delete subkomoditidata[x].td_komoditi          
        }
    }
    return res.status(200).json({
      data:subkomoditidata
    })
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
}

module.exports = getSubkomoditi