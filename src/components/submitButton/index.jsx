import PropTypes from "prop-types";

import { NOOP } from "@/utils/constants.js";

const SubmitButton = ({ disabled, onClick = NOOP }) => {
  const handleOnClick = () => onClick();

  return (
    <button
      className="w-5/6 p-3 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed"
      disabled={disabled}
      onClick={handleOnClick}
    >
      Submit
    </button>
  );
};

SubmitButton.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default SubmitButton;
