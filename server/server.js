//该模块包含了应用程序的入口点。它使用Express中间件来处理HTTP请求，并连接到MongoDB数据库。它还使用Morgan和CORS中间件来记录HTTP请求和允许跨域请求。最后，它使用错误处理中间件来处理未处理的错误，并启动服务器。
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const config = require('./config/config');
// const promptsRoutes = require('./routes/prompts');
const usersRoutes = require('./routes/users');
const { port, mongoUri } = require('./config');
const errorHandler = require('./middleware/errorHandler');
const promptCombinationsRouter = require('./routes/promptCombinations');

const app = express();

// 数据库连接
mongoose.connect(config.mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

app.use(cors());
app.use(express.json());

// 路由注册
app.use(morgan('tiny'));
//app.use('/api/prompts', promptsRoutes);
app.use('/api/users', usersRoutes);

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('Failed to connect to MongoDB', error));
  
  app.use('/api/prompt-combinations', promptCombinationsRouter);
  
  app.use(errorHandler);
  
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });