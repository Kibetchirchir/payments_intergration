"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Transaction_1 = __importDefault(require("../../../../database/models/Transaction"));
const sendCallBackClient_1 = __importDefault(require("../../../../helpers/sendCallBackClient"));
class PaymentController {
    static initiateCashIn(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { reference_id: referenceId, amount, phone_number: phoneNumber, commission, } = req.body;
            const dbRec = {
                reference_id: referenceId,
                amount,
                phone_number: phoneNumber,
                commission,
                status: 'success',
            };
            const data = yield Transaction_1.default.create(dbRec);
            sendCallBackClient_1.default(data);
            return res.status(201).json({
                message: 'successfully sent the pop up to the user',
                data,
            });
        });
    }
}
exports.default = PaymentController;
//# sourceMappingURL=payments.controller.js.map