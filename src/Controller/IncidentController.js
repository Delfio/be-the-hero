const connection = require('../database/Connection');
module.exports = {
  async index(req, res) {
   try{
    const {page = 1} = req.query;

    const [count] = await connection('incidents').count();

    const result = await connection('incidents')
      .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
      .limit(5)
      .offset((page -1) * 5)
      .select(['incidents.*', 
      'ongs.name', 
      'ongs.email', 
      'ongs.whatsapp', 
      'ongs.city', 
      'ongs.uf']);
  
    res.header('x-total-count', count['count(*)']);

    return res.json(result);
   } catch (err) {
    return res.json(err.message)
   }
  },
  async store(req, res) {
    try {
      const {title, description, value} = req.body;
      const ong_id = req.headers.authorization;
  
      const [id] = await connection('incidents').insert({
        title,
        description,
        value,
        ong_id
      });
  
      return res.json({id});
    } catch(err) {
      return res.json(err.message);
    }
  },
  async delete(req, res){
    try {
      const ong_id = req.headers.authorization;
      const {id} = req.params;

      const incidentsExists = await connection('incidents')
        .where('id', id).andWhere('ong_id', ong_id).first();

      if (!incidentsExists) {
        return res.status(401).json({error: 'Não autorizado!'})
      }
      await connection('incidents').where('id', id).delete();

      return res.json({ok: true});
    } catch(err) {
      return res.json(err.message);
    }
  }
}