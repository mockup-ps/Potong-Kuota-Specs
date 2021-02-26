const komoditipelabuhan = require('../model/komoditipelabuhan')


const getKomoditiPelabuhan = async (req, res) => {
  try {
    const komoditipelabuhandata = await komoditipelabuhan.findAll({
        where:{
            id_komoditi : req.params.idkomoditi
        }
    })
    return res.status(200).json({
      data:komoditipelabuhandata
    })
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
}

module.exports = getKomoditiPelabuhan