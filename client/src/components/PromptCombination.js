//该模块定义了一个React组件，用于渲染单个Prompt组合的文本。
import React from 'react';
import PropTypes from 'prop-types';

const PromptCombination = ({ text }) => (
  <div className="prompt-combination">
    <p className="prompt-combination-text">{text}</p>
  </div>
);

PromptCombination.propTypes = {
  text: PropTypes.string.isRequired,
};

export default PromptCombination;
