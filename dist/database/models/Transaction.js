"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable camelcase */
const sequelize_1 = require("sequelize");
const index_1 = __importDefault(require("./index"));
class Transaction extends sequelize_1.Model {
}
Transaction.init({
    reference_id: sequelize_1.DataTypes.STRING,
    amount: sequelize_1.DataTypes.NUMBER,
    phone_number: sequelize_1.DataTypes.NUMBER,
    commission: sequelize_1.DataTypes.NUMBER,
    status: sequelize_1.DataTypes.STRING,
}, {
    sequelize: index_1.default,
    tableName: 'transactions',
    underscored: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
});
exports.default = Transaction;
//# sourceMappingURL=Transaction.js.map