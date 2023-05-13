import PropTypes from "prop-types";

import {
  TEXT_OUTPUT_TYPES,
  TEXT_OUTPUT_TYPES_DEFAULT,
} from "@/utils/constants.js";

import { formatKeywordsArray } from "./helpers.js";

const TextOutput = ({
  keywordsArray,
  textOutputType = TEXT_OUTPUT_TYPES_DEFAULT,
}) => {
  if (!keywordsArray) return null;

  return (
    <div className="mt-5 p-4 text-sm font-medium text-gray-700 bg-gray-100 rounded-md">
      <p>{formatKeywordsArray({ keywordsArray, textOutputType })}</p>
    </div>
  );
};

TextOutput.propTypes = {
  keywordsArray: PropTypes.arrayOf(PropTypes.string),
  textOutputType: PropTypes.oneOf(Object.values(TEXT_OUTPUT_TYPES)),
};

export default TextOutput;
