import express, { Application } from "express";
import morgan from "morgan";
import { Routes } from "../routes/index";
var cors = require("cors"); // install en node y types 

export class App {
    app: Application;
    public routePrv: Routes = new Routes();

    constructor(
        private port?: number | string
    ){
        this.app = express();
        this.settings();
        this.middlewares()
        this.routes()
    }

    private settings(){
        this.app.set('port', this.port || 3000) 
    }

    private middlewares(){
        this.app.use(cors());
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false}))
    }

    private routes(){
        this.routePrv.clienteroutes.routes(this.app)
        this.routePrv.productoroutes.routes(this.app)
    }

    async listen(){
         await this.app.listen(this.app.get('port'));
         console.log('Server On Port', this.app.get('port'));
    }
}