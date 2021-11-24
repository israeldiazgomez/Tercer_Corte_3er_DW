import { Application } from "express";
import { ClienteController } from "../controllers/cliente.controller"; 

export class ClienteRoutes{
    public clienteController: ClienteController = new ClienteController();


    public routes(app: Application){
        app.route('/cliente').get(this.clienteController.getcliente)
        app.route('/cliente').post(this.clienteController.create)
    }
}