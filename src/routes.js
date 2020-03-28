const {Router} = require('express');

const routes = Router();

routes.get('/', (req, res) => {
  res.send("ok")
});

module.exports = routes;