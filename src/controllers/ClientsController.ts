import { Request, Response } from "express";

import { Clients, ClientsV1Model } from "../models/Clients"

class ClientsController {

    public async create (req: Request, res: Response): Promise<Response> {
        const client = await ClientsV1Model.create(req.body)    
  
        
        return res.json(client) 
    }

    public async find(req: Request, res: Response): Promise<Response> {
        const searchClients = await ClientsV1Model.find()

        return res.json(searchClients)


    }
}

export default new ClientsController()