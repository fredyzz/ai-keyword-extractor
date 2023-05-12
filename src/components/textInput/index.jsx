import { useState } from "react";
import PropTypes from "prop-types";

import {NOOP} from '@/utils/constants.js'

const TextInput = ({onChange = NOOP}) => {
  const [text, setText] = useState('');

  const handleOnChange = (e) => {
    setText(e.target.value);
    onChange(e.target.value);
  }

  return <>
    <label htmlFor="text" className="block text-sm font-medium text-gray-700 mb-1">
    Text
  </label>
  <textarea
    id="text"
    value={text}
    onChange={handleOnChange}
    className="p-3 w-full h-24 border border-gray-300 rounded-md focus:outline-none focus:border-blue-300 focus:ring-1 focus:ring-blue-300"
    placeholder="Enter text to extract keywords"
  />
  </>;
};

TextInput.propTypes = {onChange: PropTypes.func};

export default TextInput;
