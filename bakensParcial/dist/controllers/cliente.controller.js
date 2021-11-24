"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteController = void 0;
const cliente_1 = require("../models/cliente");
class ClienteController {
    getcliente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let cliente;
            try {
                cliente = yield cliente_1.Cliente.findAll();
                res.json(cliente);
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let cliente = req.body;
            try {
                const dataCliente = yield cliente_1.Cliente.create(cliente);
                res.json(dataCliente);
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
}
exports.ClienteController = ClienteController;
