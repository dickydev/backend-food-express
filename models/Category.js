import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Category = sequelize.define('category', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  fetched_at: {
    type: DataTypes.DATE,
    allowNull: true, 
  },
}, {
  timestamps: true,
  tableName: 'categories', 
  underscored: true
});

export default Category;
