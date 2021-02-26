const headerpelabuhan = require('../model/headerpelabuhan')


const getHeaderPelabuhan = async (req, res) => {
  try {
    const headerpelabuhandata = await headerpelabuhan.findAll({
        where:{
            id_header : req.params.idheader
        }
    })
    return res.status(200).json({
      data:headerpelabuhandata
    })
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
}

module.exports = getHeaderPelabuhan