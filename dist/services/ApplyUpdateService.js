"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Apply_1 = __importDefault(require("../models/Apply"));
class ApplyUpdateService {
    constructor() {
        this.execute = async ({ id, approvalStatus }) => {
            try {
                const apply = await Apply_1.default.findByIdAndUpdate(id, { approvalStatus: approvalStatus }, { new: true });
                return apply;
            }
            catch (error) {
                throw Error(error.message);
            }
        };
    }
}
exports.default = new ApplyUpdateService;
