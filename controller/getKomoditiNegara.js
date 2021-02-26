const komoditinegara = require('../model/komoditinegara')


const getKomoditiNegara = async (req, res) => {
  try {
    const komoditinegaradata = await komoditinegara.findAll({
        where:{
            id_komoditi : req.params.idkomoditi
        },
        attributes:{exclude:['createdAt','updatedAt']}
    })
    return res.status(200).json({
      data:komoditinegaradata
    })
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
}

module.exports = getKomoditiNegara