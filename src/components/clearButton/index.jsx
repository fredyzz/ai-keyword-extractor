import PropTypes from "prop-types";

import { AiFillDelete } from "react-icons/ai";

import { NOOP } from "@/utils/constants.js";

const ClearButton = ({ onClick = NOOP }) => {
  const handleOnClick = () => onClick();

  return (
    <button
      className="w-1/6 flex justify-center items-center text-gray-600 hover:text-red-600 bg-white rounded-md p-3"
      onClick={handleOnClick}
    >
      <AiFillDelete size={24} />
    </button>
  );
};

ClearButton.propTypes = {
  onClick: PropTypes.func,
};

export default ClearButton;
