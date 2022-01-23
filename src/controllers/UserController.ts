import { Request, Response } from 'express';

import { User , UsersV1Model  } from '../models/User'



class UserController {
    public async index ( req: Request, res: Response): Promise<Response> {
      
      const users = await UsersV1Model.find()
      return res.json(users)
      //return res.send('ola caralho')
    }
    
    public async create (req: Request, res: Response): Promise<Response> {
      const user = await UsersV1Model.create(req.body)    

      return res.json(user)
    }

}

export default new UserController()