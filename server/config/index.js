//该模块导出应用程序的配置，包括端口号和MongoDB URI。
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  port: process.env.PORT || 3001,
  mongoUri: process.env.MONGO_URI,
};
