import PropTypes from 'prop-types';

const Input = ({ secretWord }) => {
  return <div data-test="input-component"></div>;
};

Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
};

export default Input;
