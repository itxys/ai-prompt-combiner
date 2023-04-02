const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config/config');
const promptsRoutes = require('./routes/prompts');
const usersRoutes = require('./routes/users');

const app = express();

// 数据库连接
mongoose.connect(config.mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

app.use(cors());
app.use(express.json());

// 路由注册
app.use('/api/prompts', promptsRoutes);
app.use('/api/users', usersRoutes);

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
