"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
class Database {
    async connect(db) {
        try {
            const connection = await mongoose_1.default.connect(db, {
                useUnifiedTopology: true,
                useNewUrlParser: true,
                useCreateIndex: true,
                useFindAndModify: false
            });
            if (!connection)
                throw Error('Cannot connect to the database');
            return console.log('Connected to the Database');
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
}
exports.default = new Database;
