import  express  from "express";
import cors from "cors";
import mongoose from "mongoose";

import routes from "./routes/routes";
import routesClients from "./routes/routesClients";

class App {

    public express: express.Application

    public constructor(){
        this.express = express()

        this.middleware()
        this.database()
        this.routes()

    }

    private middleware () {
        this.express.use(express.json())
        this.express.use(cors())        
    } 
    private database (): void {
        mongoose.connect('mongodb://localhost:27017/tsnode')
    }

    private routes (): void{
        this.express.use(routes) 
        this.express.use(routesClients) 
    }
}

export default new App().express