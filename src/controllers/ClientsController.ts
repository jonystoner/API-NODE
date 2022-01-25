import { Request, Response } from 'express';

import { ClientsV1Model  } from '../models/Clients'


class ClientsController {
    public async index ( req: Request, res: Response): Promise<Response> {
      
      const clients = await ClientsV1Model.find()
      return res.json(clients)
      //return res.send('ola caralho')
    }
    
    public async create (req: Request, res: Response): Promise<Response> {
      const client = await ClientsV1Model.create(req.body)    

      return res.json(client)
    }

}

export default new ClientsController()