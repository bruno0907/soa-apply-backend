"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AuthController {
    constructor() {
        this.adminAuth = async (req, res) => {
            const { authorization } = req.headers;
            try {
                console.log(authorization);
                return res.status(200).json({
                    authorization
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
exports.default = new AuthController;
