
const connection = require('../database/Connection');
const RadonId = require('../Services/RandomID');
module.exports = {
  async index(req, res) {
    try {
      const ongs = await connection('ongs').select('*');

      return res.json(ongs);
    } catch (err){
      return res.json(err.message);
    }
  },
  async store(req, res) {
    try {
      
      const {name, email, whatsapp, city, uf} = req.body;

      const id = await RadonId.generateHex();

      await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf
      });

      return res.json(id);
    } catch(err) {
      return res.json(err.message);
    }
  }
}