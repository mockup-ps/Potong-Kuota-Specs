const referensi = require('../model/referensi')


const getHeaderReferensi = async (req, res) => {
  try {
    const referensidata = await referensi.findAll({
        where:{
            id_header : req.params.idheader
        }
    })
    return res.status(200).json({
      data:referensidata
    })
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
}

module.exports = getHeaderReferensi