import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => res.json({ result: 'TEST-API' }));

export default routes;
