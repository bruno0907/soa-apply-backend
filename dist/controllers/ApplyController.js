"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ApplyStoreService_1 = __importDefault(require("../services/ApplyStoreService"));
const ApplyIndexService_1 = __importDefault(require("../services/ApplyIndexService"));
const ApplyShowService_1 = __importDefault(require("../services/ApplyShowService"));
const ApplyDeleteService_1 = __importDefault(require("../services/ApplyDeleteService"));
const ApplyUpdateService_1 = __importDefault(require("../services/ApplyUpdateService"));
class ApplicantController {
    constructor() {
        this.store = async (req, res) => {
            const { battleTag, charName, className, mainSpec, offSpec, observations, approvalStatus } = req.body;
            const data = {
                battleTag,
                charName,
                className,
                mainSpec,
                offSpec,
                observations,
                approvalStatus
            };
            try {
                const apply = await ApplyStoreService_1.default.execute(data);
                return res.status(200).json({
                    status: 200,
                    apply
                });
            }
            catch (error) {
                return res.status(400).json({
                    status: 400,
                    message: error.message
                });
            }
        };
        this.index = async (req, res) => {
            try {
                const applies = await ApplyIndexService_1.default.execute();
                return res.status(200).json({
                    status: 200,
                    applies
                });
            }
            catch (error) {
                return res.status(400).json({
                    status: 400,
                    message: error.message
                });
            }
        };
        this.show = async (req, res) => {
            const { id } = req.params;
            try {
                const apply = await ApplyShowService_1.default.execute(id);
                return res.status(200).json({
                    status: 200,
                    apply
                });
            }
            catch (error) {
                return res.status(400).json({
                    status: 400,
                    message: error.message
                });
            }
        };
        this.delete = async (req, res) => {
            const { id } = req.params;
            try {
                await ApplyDeleteService_1.default.execute(id);
                return res.sendStatus(200);
            }
            catch (error) {
                return res.status(400).json({
                    status: 400,
                    message: error.message
                });
            }
        };
        this.update = async (req, res) => {
            const { id } = req.params;
            const { approvalStatus } = req.body;
            try {
                const apply = await ApplyUpdateService_1.default.execute({ id, approvalStatus });
                return res.status(200).json({
                    status: 200,
                    apply
                });
            }
            catch (error) {
                return res.status(400).json({
                    status: 400,
                    message: error.message
                });
            }
        };
    }
}
exports.default = new ApplicantController;
