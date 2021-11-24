import { Response, Request } from "express";
import { Cliente, ClienteI } from "../models/cliente";


export class ClienteController{

    public async getcliente(req: Request, res: Response){
        let cliente:Cliente[];
        try {
            cliente = await Cliente.findAll();
            res.json(cliente)
        } catch (error) {
            res.status(500).json(error)
            
        }
    }
    public async create(req: Request, res: Response){
        let cliente: ClienteI = req.body;
        try {
            const dataCliente: ClienteI = await Cliente.create(cliente);
            res.json(dataCliente)
        } catch (error) {
            res.status(500).json(error)
            
        }
    }  
}