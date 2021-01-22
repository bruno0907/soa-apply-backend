"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Class_1 = __importDefault(require("../models/Class"));
class ClassShowService {
    constructor() {
        this.execute = (id) => {
            try {
                const spec = Class_1.default.findById(id);
                if (!spec)
                    throw new Error('Register not found');
                return spec;
            }
            catch (error) {
                throw Error(error.message);
            }
        };
    }
}
exports.default = new ClassShowService;
