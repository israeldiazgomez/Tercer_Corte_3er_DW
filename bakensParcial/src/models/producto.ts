import sequelize from "sequelize";
import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";
import { TriviaSyntaxKind } from 'typescript';
export class Producto extends Model{
    public nombre!: string;
    public descripcion!: string;
}
export interface ProductoI{
    nombre: string;
    descripcion: string;
}

Producto.init(

   {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false
    },

   },
   {
    tableName: "Producto",
    sequelize: database,
    timestamps: true
   }

)