"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Apply_1 = __importDefault(require("../models/Apply"));
class ApplyShowService {
    constructor() {
        this.execute = async (id) => {
            try {
                const apply = await Apply_1.default.findByIdAndRemove(id);
                if (!apply)
                    throw Error('Apply not found');
                return;
            }
            catch (error) {
                throw Error(error.message);
            }
        };
    }
}
exports.default = new ApplyShowService;
