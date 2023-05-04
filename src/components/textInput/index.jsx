import { useState } from "react";
import PropTypes from "prop-types";

import {NOOP} from '@/utils/constants.js'

const TextInput = ({onChange = NOOP}) => {
  const [text, setText] = useState('');

  const handleOnChange = (e) => {
    setText(e.target.value);
    onChange(e.target.value);
  }

  return (
    <textarea rows="5" cols="33" value={text} onChange={handleOnChange}/>
  );
};

TextInput.propTypes = {onChange: PropTypes.func};

export default TextInput;
