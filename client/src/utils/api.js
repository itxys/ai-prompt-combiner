//该模块定义了一个用于与服务器交互的API客户端。它导出了getPromptCombinations和createPromptCombination函数，这些函数分别用于获取Prompt组合列表和创建新的Prompt组合。这些函数使用fetch函数进行HTTP请求，并解析和处理JSON响应。如果响应不成功，则会抛出一个带有错误消息的错误。
const API_BASE_URL = 'http://localhost:5000/api';

export const getPromptCombinations = async () => {
  const response = await fetch(`${API_BASE_URL}/prompt-combinations`);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message);
  }
  return data;
};

export const createPromptCombination = async (promptCombination) => {
  const response = await fetch(`${API_BASE_URL}/prompt-combinations`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(promptCombination),
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message);
  }
  return data;
};
