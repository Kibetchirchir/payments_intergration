"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const asyncHandler_1 = __importDefault(require("../../../../middlewares/asyncHandler"));
const payments_controller_1 = __importDefault(require("./payments.controller"));
const router = express_1.Router();
router.post('/initiate_payments', asyncHandler_1.default(payments_controller_1.default.initiateCashIn));
exports.default = router;
//# sourceMappingURL=payments.routes.js.map