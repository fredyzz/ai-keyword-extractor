import PropTypes from "prop-types";

import { AiFillDelete } from "react-icons/ai";

import { NOOP } from "@/utils/constants.js";

function ApiKeyInput({ apiKey, setApiKey = NOOP }) {
  const clearInput = () => setApiKey(undefined);
  const handleOnChange = (e) => setApiKey(e.target.value);

  return (
    <div className="mb-4">
      <label
        htmlFor="apiKey"
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        API Key
      </label>
      <div className="relative">
        <input
          id="apiKey"
          type="text"
          value={apiKey || ""}
          onChange={handleOnChange}
          className="p-3 pl-4 pr-10 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-300 focus:ring-1 focus:ring-blue-300"
          placeholder="Enter OpenAI API Key"
        />
        {apiKey && (
          <AiFillDelete
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-red-500 cursor-pointer"
            size={20}
            onClick={clearInput}
          />
        )}
      </div>
    </div>
  );
}

ApiKeyInput.propTypes = {
  apiKey: PropTypes.string,
  setApiKey: PropTypes.func,
};

export default ApiKeyInput;
