//该模块定义了一个Prompt组合表单组件，用于创建新的Prompt组合。它使用useState hook来跟踪表单输入值，并定义了一些处理表单输入和提交的回调函数。
import React, { useState } from 'react';

const PromptCombinationForm = ({ onSubmit }) => {
  const [prompts, setPrompts] = useState(['', '', '']);
  const [name, setName] = useState('');

  const handlePromptChange = (index, value) => {
    const newPrompts = [...prompts];
    newPrompts[index] = value;
    setPrompts(newPrompts);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ name, prompts });
    setName('');
    setPrompts(['', '', '']);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name-input">Prompt组合名称：</label>
      <input
        id="name-input"
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
      />
      <label htmlFor="prompt1-input">Prompt 1：</label>
      <input
        id="prompt1-input"
        type="text"
        value={prompts[0]}
        onChange={(event) => handlePromptChange(0, event.target.value)}
        required
      />
      <label htmlFor="prompt2-input">Prompt 2：</label>
      <input
        id="prompt2-input"
        type="text"
        value={prompts[1]}
        onChange={(event) => handlePromptChange(1, event.target.value)}
        required
      />
      <label htmlFor="prompt3-input">Prompt 3：</label>
      <input
        id="prompt3-input"
        type="text"
        value={prompts[2]}
        onChange={(event) => handlePromptChange(2, event.target.value)}
        required
      />
      <button type="submit">创建Prompt组合</button>
    </form>
  );
};

export default PromptCombinationForm;
