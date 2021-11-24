import { Application } from "express";
import { ProductoController } from "../controllers/producto.controller";

export class ProductoRoutes{
    public productoController: ProductoController = new ProductoController();


    public routes(app: Application){
        app.route('/producto').get(this.productoController.getproducto)
        app.route('/producto').post(this.productoController.create)
    }
}