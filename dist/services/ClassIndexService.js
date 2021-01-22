"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Class_1 = __importDefault(require("../models/Class"));
class ClassIndexService {
    constructor() {
        this.execute = async () => {
            try {
                const classes = await Class_1.default.find();
                if (!classes || null)
                    throw new Error('No classes found');
                return classes;
            }
            catch (error) {
                throw Error(error.message);
            }
        };
    }
}
exports.default = new ClassIndexService;
