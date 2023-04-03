//该模块包含一个错误处理中间件，用于捕获和处理应用程序中的错误。
const errorHandler = (error, req, res, next) => {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  };
  
  module.exports = errorHandler;
  