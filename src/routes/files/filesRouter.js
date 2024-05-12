const { frontFile, createCancion, deleteCancion, updateCancion , getCanciones } = require('../../controllers/frontController');

const filesRouter = require('express').Router();

filesRouter.get('/', frontFile);
filesRouter.get('/canciones', getCanciones);
filesRouter.post('/canciones', createCancion);
filesRouter.put('/canciones/:id', updateCancion);
filesRouter.delete('/canciones/:id', deleteCancion);

module.exports = filesRouter;