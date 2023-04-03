//该模块定义了PromptCombination数据模型，该模型包含一个text属性和一个createdAt属性，用于表示Prompt组合的文本和创建时间。
const mongoose = require('mongoose');

const promptCombinationSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const PromptCombination = mongoose.model('PromptCombination', promptCombinationSchema);

module.exports = PromptCombination;
