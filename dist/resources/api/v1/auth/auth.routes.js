"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const asyncHandler_1 = __importDefault(require("../../../../middlewares/asyncHandler"));
const auth_controller_1 = __importDefault(require("./auth.controller"));
const router = express_1.Router();
router.post('/signup', asyncHandler_1.default(auth_controller_1.default.signUp));
exports.default = router;
//# sourceMappingURL=auth.routes.js.map