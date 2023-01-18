import { Request, Response } from 'express';

import { User , UsersV1Model  } from '../models/User'



class UserController {
    public async index ( req: Request, res: Response): Promise<Response> {
      
      const users = await UsersV1Model.find()
      res.send("salve")
      return res.json(users)
      //return res.send('salve')
    }
    
    public async create (req: Request, res: Response): Promise<Response> {
      const user = await UsersV1Model.create(req.body)    

      
      return res.json(user) 
    }

    public async get (req:Request, res:Response): Promise<Response> {
      
      const searchOne = await UsersV1Model.findOne(req.params)

      return res.json(searchOne)      
    }

    public async update( req:Request, res:Response): Promise<Response> {

      const toUpadate = await UsersV1Model.updateOne(req.body.params)

      
      return res.json(toUpadate) 

    }
}

export default new UserController()