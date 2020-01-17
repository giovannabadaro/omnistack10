const {Router} = require('express'); //importar uma coisa especifica do express
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

routes.get('/devs', DevController.index);

routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);

module.exports = routes;