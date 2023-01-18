import { Router } from 'express'

import UserController  from '../controllers/UserController'
import ClientsController from '../controllers/ClientsController'

const routes  = Router()

routes.post('/clients/create', ClientsController.create)
routes.get('/clients/search', ClientsController.find)


routes.get('/users', UserController.index)
routes.post('/users', UserController.create)
routes.get('/users/testes',UserController.get)
routes.put('/users/update',UserController.update)


export default routes