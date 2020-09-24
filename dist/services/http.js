"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const marketPlaceBaseURL = process.env.MARKET_PLACE_BASE_URL;
const marketPlace = axios_1.default.create({
    baseURL: marketPlaceBaseURL,
    headers: {
        'Content-Type': 'application/json',
    },
});
exports.default = marketPlace;
//# sourceMappingURL=http.js.map