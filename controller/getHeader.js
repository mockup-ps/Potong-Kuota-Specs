const header = require('../model/header');  


const getHeader = async (req, res) => {
  try {
    const headerdata = await header.findAll({
        where:{
            id_header : req.params.idheader
        }
    })
    return res.status(200).json({
      data:headerdata
    })
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
}

module.exports = getHeader