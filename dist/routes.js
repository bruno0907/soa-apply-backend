"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AdminController_1 = __importDefault(require("./controllers/AdminController"));
const ApplyController_1 = __importDefault(require("./controllers/ApplyController"));
const ClassesController_1 = __importDefault(require("./controllers/ClassesController"));
const route = express_1.Router();
route.post('/', ApplyController_1.default.store);
route.get('/', ApplyController_1.default.index);
route.get('/apply/:id', ApplyController_1.default.show);
route.post('/apply/:id', ApplyController_1.default.update);
route.delete('/apply/:id', ApplyController_1.default.delete);
route.get('/classes', ClassesController_1.default.index);
route.get('/classes/:id', ClassesController_1.default.show);
route.post('/classes', ClassesController_1.default.store);
route.post('/admin/new-admin', AdminController_1.default.store);
exports.default = route;
