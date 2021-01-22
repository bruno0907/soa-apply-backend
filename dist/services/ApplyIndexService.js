"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Apply_1 = __importDefault(require("../models/Apply"));
class ApplyIndexService {
    constructor() {
        this.execute = async () => {
            try {
                const applies = await Apply_1.default.find().sort('-createdAt');
                return applies;
            }
            catch (error) {
                throw new Error(error.message);
            }
        };
    }
}
exports.default = new ApplyIndexService;
