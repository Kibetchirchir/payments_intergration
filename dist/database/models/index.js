"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const sequelize_1 = require("sequelize");
dotenv_1.default.config();
const DBConfig = require('../config/config');
const env = process.env.NODE_ENV || 'development';
const config = DBConfig[env];
exports.sequelize = new sequelize_1.Sequelize(process.env[config.use_env_variable], config);
exports.default = exports.sequelize;
//# sourceMappingURL=index.js.map