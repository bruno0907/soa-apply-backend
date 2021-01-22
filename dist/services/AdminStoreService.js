"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const Admin_1 = __importDefault(require("../models/Admin"));
class AdminStoreService {
    constructor() {
        this.execute = async ({ email, password }) => {
            try {
                const passwordHash = await bcryptjs_1.default.hash(password, 8);
                const data = {
                    email,
                    password: passwordHash
                };
                await Admin_1.default.create(data);
                return;
            }
            catch (error) {
                throw Error(error.message);
            }
        };
    }
}
exports.default = new AdminStoreService;
