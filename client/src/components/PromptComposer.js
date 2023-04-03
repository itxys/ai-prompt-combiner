//该组件用于创建和编辑Prompt组合。它包含一个表单，其中包含一个文本框和一个按钮，可以将用户输入的Prompt组合保存到后端服务器。
import React, { useState } from 'react';
import { createPromptCombination } from '../utils/apiClient';

const PromptComposer = () => {
  const [promptText, setPromptText] = useState('');
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!promptText) {
      return;
    }
    try {
      const response = await createPromptCombination({ text: promptText });
      console.log(response);
      setPromptText('');
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (event) => {
    setPromptText(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your prompt combination:
        <input
          type="text"
          value={promptText}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Save</button>
    </form>
  );
};

export default PromptComposer;
