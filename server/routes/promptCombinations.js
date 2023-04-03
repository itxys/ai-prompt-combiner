//该模块定义了Prompt组合API的路由，包括用于获取所有Prompt组合和创建新Prompt组合的路由。
const express = require('express');
const { getAllPromptCombinations, createPromptCombination } = require('../controllers/promptCombinations');

const router = express.Router();

router.get('/', getAllPromptCombinations);
router.post('/', createPromptCombination);

module.exports = router;
