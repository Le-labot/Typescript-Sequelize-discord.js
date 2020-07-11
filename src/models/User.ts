import sequelize from '../config/sequelize';
import { Model, DataTypes, Optional } from 'sequelize';

interface IUserAttributes {
  id: number;
  firstName: string;
  lastName: string;
}

interface UserCreationAttributes extends Optional<IUserAttributes, "id"> {}

class User extends Model<IUserAttributes, UserCreationAttributes>
  implements IUserAttributes {
  public id!: number;
  public firstName!: string;
  public lastName!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
};
User.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
  }
}, {
    sequelize,
    modelName: 'User'
})

export default User;