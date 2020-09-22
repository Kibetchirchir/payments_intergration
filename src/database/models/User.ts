import { DataTypes, Model } from "sequelize";
import sequelize from './index'

class User extends Model{
    public id!: number;
    public name!: string;
    public phone_number!: number;

    public readonly created_at!: Date;
    public readonly updated_at!: Date;
}

User.init(
    {
      phone_number: DataTypes.NUMBER,
      name: DataTypes.STRING,
    },
    {
      sequelize,
      tableName: 'users',
      underscored: true,
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  );

  export default User;
