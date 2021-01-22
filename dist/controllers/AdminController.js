"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AdminStoreService_1 = __importDefault(require("../services/AdminStoreService"));
class AdminController {
    constructor() {
        this.store = async (req, res) => {
            const { email, password } = req.body;
            try {
                await AdminStoreService_1.default.execute({ email, password });
                return res.sendStatus(200);
            }
            catch (error) {
                return res.status(400).json({
                    status: 400,
                    error: error.message
                });
            }
        };
    }
}
exports.default = new AdminController;
