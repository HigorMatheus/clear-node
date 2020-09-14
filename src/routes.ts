import express from 'express';

const routes = express.Router();

routes.get('/', (req, res) => res.json({ mensagem: 'tudo certo com ts' }));

export default routes;
