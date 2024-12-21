import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ secretWord }) => {
  const [currentGuess, setCurrentGuess] = React.useState('');

  return (
    <div data-test="input-component">
      <form className="d-inline-flex gap-3">
        <input
          data-test="input-box"
          type="text"
          className="mb-2 rounded form-control"
          placeholder="enter guess"
          value={currentGuess}
          onChange={(event) => {
            return setCurrentGuess(event.target.value);
          }}
        />
        <button
          data-test="submit-button"
          className="btn btn-primary mb-2"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
};

export default Input;
