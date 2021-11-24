"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../database/db");
class Cliente extends sequelize_1.Model {
}
exports.Cliente = Cliente;
Cliente.init({
    nombre: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    apellido: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    cedula: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false
    },
    fecha: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    }
}, {
    tableName: "Cliente",
    sequelize: db_1.database,
    timestamps: true
});
