import PropTypes from "prop-types";
import {
  NOOP,
  TEXT_OUTPUT_TYPES,
  TEXT_OUTPUT_TYPES_DEFAULT,
} from "@/utils/constants.js";

function TextOutputFormatSelector({
  selectedFormat = TEXT_OUTPUT_TYPES_DEFAULT,
  setSelectedFormat = NOOP,
}) {
  const handleChange = (e) => {
    setSelectedFormat(e.target.value);
  };

  return (
    <div className="flex flex-col">
      {Object.keys(TEXT_OUTPUT_TYPES).map((formatType) => (
        <label className="inline-flex items-center" key={formatType}>
          <input
            checked={selectedFormat === TEXT_OUTPUT_TYPES[formatType]}
            className="form-radio h-5 w-5 text-blue-600"
            onChange={handleChange}
            type="radio"
            value={TEXT_OUTPUT_TYPES[formatType]}
          />
          <span className="ml-2">{TEXT_OUTPUT_TYPES[formatType]}</span>
        </label>
      ))}
    </div>
  );
}

TextOutputFormatSelector.propTypes = {
  selectedFormat: PropTypes.string,
  setSelectedFormat: PropTypes.func,
};

export default TextOutputFormatSelector;
