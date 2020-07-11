const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('mysql://root:@localhost:3308/mydb');

export default sequelize;
