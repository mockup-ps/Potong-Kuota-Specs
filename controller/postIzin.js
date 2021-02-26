const header = require('../model/header');
const headernegara = require('../model/headernegara');
const headerpelabuhan = require('../model/headerpelabuhan');
const kendalikuota = require('../model/kendalikuota');
const komoditi = require('../model/komoditi');
const subkomoditi = require('../model/subkomoditi')
const komoditinegara = require('../model/komoditinegara');
const komoditipelabuhan = require('../model/komoditipelabuhan');
const kuota = require('../model/kuota');
const referensi = require('../model/referensi');


const postIzin = async (req, res) => {
  try {
    if (req.body.header == null){
      return res.status(400).json({error: "Payload kosong"})
    } 
    var headerdata = req.body.header
    var komoditidata = req.body.komoditi
    var referensidata = headerdata.referensi
    var negara = ["negaraAsal","negaraMuat","negaraTransit","negaraTujuan"]
    var pelabuhan = ["pelAsal","pelMuat","pelTransit","pelTujuan"]    
    const headerPost = await header.create(headerdata);
    for (x in referensidata){
      var data = referensidata[x]
      data.id_header = headerPost.id_header
      await referensi.create(data)
    }
    for (x in negara){
      for (y in headerdata[negara[x]]){
        var kd_jns_kegiatan = ""
        if(negara[x] == "negaraAsal"){
          kd_jns_kegiatan = "1"
        } else if(negara[x] == "negaraMuat"){
          kd_jns_kegiatan = "2"
        } else if(negara[x] == "negaraTransit"){
          kd_jns_kegiatan = "3"
        } else {
          kd_jns_kegiatan = "4"
        }
        await headernegara.create({id_header:headerPost.id_header, kd_negara:headerdata[negara[x]][y], kd_jns_kegiatan : kd_jns_kegiatan})
      }
    }
    for (x in pelabuhan){
      for (y in headerdata[pelabuhan[x]]){
        var kd_jns_kegiatan = ""
        if(pelabuhan[x] == "pelAsal"){
          kd_jns_kegiatan = "1"
        } else if(pelabuhan[x] == "pelMuat"){
          kd_jns_kegiatan = "2"
        } else if(pelabuhan[x] == "pelTransit"){
          kd_jns_kegiatan = "3"
        } else {
          kd_jns_kegiatan = "4"
        }
        await headerpelabuhan.create({id_header:headerPost.id_header, kd_pelabuhan:headerdata[pelabuhan[x]][y], kd_jns_kegiatan : kd_jns_kegiatan})
      }
    }
    for (x in komoditidata){
      var data = komoditidata[x]          
      const komoditikuotaPost = await kuota.create({jml_kuota:data.jml_kuota, jml_terpakai:data.jml_terpakai, jml_sisa:data.jml_sisa })
      await kendalikuota.create({id_kuota:komoditikuotaPost.id_kuota, jumlah:data.jml_kuota}) 
      data.id_kuota = komoditikuotaPost.id_kuota
      data.id_header = headerPost.id_header
      const komoditipost = await komoditi.create(data)
      for (a in negara){
        for (b in data[negara[a]]){
          var kd_jns_kegiatan = ""
          if(negara[a] == "negaraAsal"){
            kd_jns_kegiatan = "1"
          } else if(negara[a] == "negaraMuat"){
            kd_jns_kegiatan = "2"
          } else if(negara[a] == "negaraTransit"){
            kd_jns_kegiatan = "3"
          } else {
            kd_jns_kegiatan = "4"
          }
          await komoditinegara.create({id_komoditi:komoditipost.id_komoditi, kd_negara:data[negara[a]][b], kd_jns_kegiatan : kd_jns_kegiatan})
        }
      }  
      for (c in pelabuhan){
        for (d in data[pelabuhan[c]]){
          var kd_jns_kegiatan = ""
          if(pelabuhan[c] == "pelAsal"){
            kd_jns_kegiatan = "1"
          } else if(pelabuhan[c] == "pelMuat"){
            kd_jns_kegiatan = "2"
          } else if(pelabuhan[c] == "pelTransit"){
            kd_jns_kegiatan = "3"
          } else {
            kd_jns_kegiatan = "4"
          }
          await komoditipelabuhan.create({id_komoditi:komoditipost.id_komoditi, kd_pelabuhan:data[pelabuhan[c]][d], kd_jns_kegiatan : kd_jns_kegiatan})
        }
      }       
      for (y in data.subkomoditi){
        data2 = data.subkomoditi[y]
        const subkomoditikuotaPost = await kuota.create({jml_kuota:data2.jml_kuota, jml_terpakai:data2.jml_terpakai, jml_sisa:data2.jml_sisa})
        await kendalikuota.create({id_kuota:subkomoditikuotaPost.id_kuota, jumlah:data2.jml_kuota})
        data2.id_kuota = subkomoditikuotaPost.id_kuota
        data2.id_komoditi = komoditipost.id_komoditi
        const subkomoditiPost = await subkomoditi.create(data2)
      }
    }    
    return res.status(201).json({
      status:"Sukses Post"
    })
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
}

module.exports = postIzin