import { TEXT_OUTPUT_TYPES } from "@/utils/constants.js";

const getFormatFunction = {
  [TEXT_OUTPUT_TYPES.ARRAY]: (keywordsArray) => JSON.stringify(keywordsArray),
  [TEXT_OUTPUT_TYPES.COMMA_SEPARATED]: (keywordsArray) =>
    keywordsArray.join(","),
  [TEXT_OUTPUT_TYPES.SPACE_SEPARATED]: (keywordsArray) =>
    keywordsArray.join(" "),
};

export const formatKeywordsArray = ({ keywordsArray, textOutputType }) => {
  const formatFunction = getFormatFunction[textOutputType];
  return formatFunction(keywordsArray);
};
