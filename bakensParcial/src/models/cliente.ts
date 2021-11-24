import sequelize from "sequelize";
import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";
import { TriviaSyntaxKind } from 'typescript';
export class Cliente extends Model{
    public nombre!: string;
    public apellido!: string;
    public cedula!: number;
    public fecha!: Date;
    public resultado!: boolean;
}
export interface ClienteI{
    nombre: string;
    apellido: string;
    cedula: number;
    fecha: Date;
    resultado: boolean;
}

Cliente.init(

   {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cedula: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false
    },
    resultado: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },

   },
   {
    tableName: "Cliente",
    sequelize: database,
    timestamps: true
   }

)