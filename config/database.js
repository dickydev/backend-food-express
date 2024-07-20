import { Sequelize } from "sequelize";

const sequelize = new Sequelize('db_food', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

export default sequelize;