//该组件用于显示所有已保存的Prompt组合。它从后端服务器获取所有Prompt组合并显示在列表中。
import React, { useEffect, useState } from 'react';
import { getPromptCombinations } from '../utils/apiClient';

const PromptList = () => {
  const [promptCombinations, setPromptCombinations] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getPromptCombinations();
        setPromptCombinations(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <ul>
      {promptCombinations.map((promptCombination) => (
        <li key={promptCombination.id}>{promptCombination.text}</li>
      ))}
    </ul>
  );
};

export default PromptList;
