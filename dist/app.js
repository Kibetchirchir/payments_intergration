"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const api_1 = __importDefault(require("./resources/api"));
const app = express_1.default();
app.use(express_1.default.json());
app.use('/api', api_1.default);
app.get('/', (req, res) => res.status(200).send({ message: 'hello world' }));
exports.default = app;
//# sourceMappingURL=app.js.map