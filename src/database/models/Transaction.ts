/* eslint-disable camelcase */
import { DataTypes, Model } from 'sequelize';
import sequelize from './index';

class Transaction extends Model {
    public id!: number;

    public reference_id!: string;

    public amount!: number;

    public phone_number!: number;

    public commission!: number;

    public status!: string;

    public readonly created_at!: Date;

    public readonly updated_at!: Date;
}

Transaction.init({
  reference_id: DataTypes.STRING,
  amount: DataTypes.NUMBER,
  phone_number: DataTypes.NUMBER,
  commission: DataTypes.NUMBER,
  status: DataTypes.STRING,
},
{
  sequelize,
  tableName: 'transactions',
  underscored: true,
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
});

export default Transaction;
