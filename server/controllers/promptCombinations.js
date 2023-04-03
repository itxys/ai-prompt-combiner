//该模块包含两个控制器函数：getAllPromptCombinations和createPromptCombination。前者用于获取所有Prompt组合，后者用于创建新的Prompt组合。
const PromptCombination = require('../models/PromptCombination');

const getAllPromptCombinations = async (req, res, next) => {
  try {
    const promptCombinations = await PromptCombination.find().sort({ createdAt: -1 });
    res.json(promptCombinations);
  } catch (error) {
    next(error);
  }
};

const createPromptCombination = async (req, res, next) => {
  const { text } = req.body;
  try {
    const promptCombination = new PromptCombination({ text });
    const savedPromptCombination = await promptCombination.save();
    res.json(savedPromptCombination);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllPromptCombinations, createPromptCombination };
