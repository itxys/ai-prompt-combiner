//该模块定义了应用程序的首页，用于显示Prompt组合表单和Prompt组合列表。它使用useState hook来跟踪Prompt组合列表，并在组件加载时使用useEffect hook来加载Prompt组合列表。它还定义了一个处理Prompt组合表单提交的回调函数，该回调函数创建新的Prompt组合并重新加载Prompt组合列表。
import React, { useState, useEffect } from 'react';
import PromptCombinationForm from '../components/PromptCombinationForm';
import PromptCombinationList from '../components/PromptCombinationList';
import { getPromptCombinations, createPromptCombination } from '../utils/api';

const HomePage = () => {
  const [promptCombinations, setPromptCombinations] = useState([]);

  const loadPromptCombinations = () => {
    getPromptCombinations()
      .then((data) => setPromptCombinations(data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    loadPromptCombinations();
  }, []);

  const handlePromptCombinationSubmit = (promptCombination) => {
    createPromptCombination(promptCombination)
      .then(() => loadPromptCombinations())
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h1>AI Prompt Combination Tool</h1>
      <PromptCombinationForm onSubmit={handlePromptCombinationSubmit} />
      <PromptCombinationList promptCombinations={promptCombinations} />
    </div>
  );
};

export default HomePage;
