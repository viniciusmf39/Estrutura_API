import { Router } from 'express';
import cors from 'cors';

import UserController from './app/controllers/UserController';

const routes = Router();

routes.get('/', (req, res) => res.json({ result: 'TEST-API' }));
routes.use(cors());

routes.post('/users', UserController.store);
routes.get('/users', UserController.index);
routes.get('/users/:uid', UserController.show);
routes.put('/users/:uid', UserController.update);
routes.delete('/users/:uid', UserController.delete);

export default routes;
