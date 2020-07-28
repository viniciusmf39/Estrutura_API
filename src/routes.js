import { Router } from 'express';

import UserController from './app/controllers/UserController';

const routes = Router();

routes.get('/', (req, res) => res.json({ result: 'TEST-API' }));

routes.post('/users', UserController.store);
routes.get('/users', UserController.index);

export default routes;
