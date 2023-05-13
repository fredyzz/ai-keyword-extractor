import PropTypes from "prop-types";

import { NOOP } from "@/utils/constants.js";

const TextInput = ({ text, setSelectedText = NOOP }) => {
  const handleOnChange = (e) => setSelectedText(e.target.value);

  return (
    <>
      <label
        className="block text-sm font-medium text-gray-700 mb-1"
        htmlFor="text"
      >
        Text
      </label>
      <textarea
        className="p-3 w-full h-24 border border-gray-300 rounded-md focus:outline-none focus:border-blue-300 focus:ring-1 focus:ring-blue-300"
        id="text"
        onChange={handleOnChange}
        placeholder="Enter text to extract keywords"
        value={text || ""}
      />
    </>
  );
};

TextInput.propTypes = {
  setSelectedText: PropTypes.func,
  text: PropTypes.string,
};

export default TextInput;
