const headernegara = require('../model/headernegara')


const getHeaderNegara = async (req, res) => {
  try {
    const headernegaradata = await headernegara.findAll({
        where:{
            id_header : req.params.idheader
        }
    })
    return res.status(200).json({
      data:headernegaradata
    })
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
}

module.exports = getHeaderNegara