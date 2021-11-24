import { Response, Request } from "express";
import { Producto, ProductoI } from "../models/producto";

export class ProductoController{

    public async getproducto(req: Request, res: Response){
        let producto:Producto[];
        try {
            producto = await Producto.findAll();
            res.json(producto)
        } catch (error) {
            res.status(500).json(error)
            
        }
    }
    public async create(req: Request, res: Response){
        let producto: ProductoI = req.body;
        try {
            const dataProducto: ProductoI = await Producto.create(producto);
            res.json(dataProducto)
        } catch (error) {
            res.status(500).json(error)
            
        }
    }  
}