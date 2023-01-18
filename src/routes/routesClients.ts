import { Router } from 'express'

import ClientsController  from '../controllers/ClientsController'

const routes  = Router()


routes.get('/listclients', ClientsController.index)
routes.post('/clients', ClientsController.create)


export default routes