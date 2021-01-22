"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const cors_1 = __importDefault(require("cors"));
const connection_1 = __importDefault(require("./database/connection"));
require('dotenv').config({ path: __dirname + '/.env' });
const app = express_1.default();
const _PORT = process.env.PORT;
const _DB = process.env.MONGOOSE_DB || 'mongodb+srv://admin:N0xCYTHsvpt39682@cluster0.tofyy.mongodb.net/soa-applies?retryWrites=true&w=majority';
connection_1.default.connect(_DB);
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(routes_1.default);
app.listen(_PORT, () => console.log('Server running on http://localhost:3333'));
