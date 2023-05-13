import PropTypes from 'prop-types';

const ErrorMessage = ({ error }) =>  (error ? (<div className="w-full text-red-800 my-2 ">{error}</div>) : null )

ErrorMessage.propTypes = {
    error: PropTypes.string,
}

export default ErrorMessage;