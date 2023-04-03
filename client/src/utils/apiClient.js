//该文件包含用于与后端API进行通信的函数。
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001';

export const getPromptCombinations = async () => {
  const response = await axios.get(`${API_BASE_URL}/prompt_combinations`);
  return response.data;
};

export const createPromptCombination = async (promptCombination) => {
  const response = await axios.post(`${API_BASE_URL}/prompt_combinations`, promptCombination);
  return response.data;
};
