const connection = require('../database/Connection');
module.exports = {
  async store(req, res) {
    try {
      const {id} = req.body;

      const ong = await connection('ongs')
        .where('id', id)
        .select('name')
        .first()

      if(!ong) {
        return res.status(400).json({error: 'Não há um perfil nesse ID'})
      };

      return res.json(ong);

    } catch (error) {
      return res.json(error.message);
    }
  }
}