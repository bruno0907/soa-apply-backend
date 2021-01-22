"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClassIndexService_1 = __importDefault(require("../services/ClassIndexService"));
const ClassShowService_1 = __importDefault(require("../services/ClassShowService"));
const ClassStoreService_1 = __importDefault(require("../services/ClassStoreService"));
class ClassesController {
    constructor() {
        this.store = async (req, res) => {
            const { className, specializations } = req.body;
            const data = {
                className,
                specializations
            };
            try {
                const classes = await ClassStoreService_1.default.execute(data);
                return res.status(200).json(classes);
            }
            catch (error) {
                return res.status(400).json({
                    status: 400,
                    error: error.message
                });
            }
        };
        this.index = async (req, res) => {
            try {
                const classes = await ClassIndexService_1.default.execute();
                return res.status(200).json({
                    status: 200,
                    classes
                });
            }
            catch (error) {
                return res.status(400).json({
                    status: 400,
                    error: error.message
                });
            }
        };
        this.show = async (req, res) => {
            const { id } = req.params;
            try {
                const specs = await ClassShowService_1.default.execute(id);
                return res.status(200).json({
                    status: 200,
                    specs
                });
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
exports.default = new ClassesController;
