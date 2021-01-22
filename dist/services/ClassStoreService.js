"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Class_1 = __importDefault(require("../models/Class"));
class ClassesService {
    constructor() {
        this.execute = async (data) => {
            try {
                const newClass = await Class_1.default.create(data);
                return newClass;
            }
            catch (error) {
                throw Error(error.message);
            }
        };
    }
}
exports.default = new ClassesService;
