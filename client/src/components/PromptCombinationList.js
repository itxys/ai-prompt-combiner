//该模块定义了一个Prompt组合列表组件，用于显示所有Prompt组合的名称和Prompts。它使用map函数将每个Prompt组合渲染为一个PromptCombinationListItem组件。
import React from 'react';
import PromptCombinationListItem from './PromptCombinationListItem';

const PromptCombinationList = ({ promptCombinations }) => {
  return (
    <ul>
      {promptCombinations.map((promptCombination) => (
        <PromptCombinationListItem
          key={promptCombination._id}
          promptCombination={promptCombination}
        />
      ))}
    </ul>
  );
};

export default PromptCombinationList;
