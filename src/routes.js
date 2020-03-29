const {Router} = require('express');

const routes = Router();
const OngController = require('./Controller/OngController');
const IncidentsController = require('./Controller/IncidentController');
const ProfileController = require('./Controller/ProfileController');
const SessionController = require('./Controller/SessionController');

routes.post('/ongs', OngController.store);
routes.get('/ongs', OngController.index);

//Auth
routes.post('/incidents', IncidentsController.store);
routes.get('/incidents', IncidentsController.index);
routes.delete('/incidents/:id', IncidentsController.delete);

routes.get('/profile',ProfileController.index);

//Login

routes.post('/sessions', SessionController.store);


module.exports = routes;