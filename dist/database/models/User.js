"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable camelcase */
const sequelize_1 = require("sequelize");
const index_1 = __importDefault(require("./index"));
class User extends sequelize_1.Model {
}
User.init({
    phone_number: sequelize_1.DataTypes.NUMBER,
    name: sequelize_1.DataTypes.STRING,
}, {
    sequelize: index_1.default,
    tableName: 'users',
    underscored: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
});
exports.default = User;
//# sourceMappingURL=User.js.map