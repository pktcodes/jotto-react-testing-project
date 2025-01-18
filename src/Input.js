import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ secretWord, success }) => {
  const [currentGuess, setCurrentGuess] = React.useState('');

  if (success) {
    return <div data-test="input-component" />;
  }

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
            setCurrentGuess(event.target.value);
          }}
        />
        <button
          data-test="submit-button"
          className="btn btn-primary mb-2"
          type="submit"
          onClick={(event) => {
            event.preventDefault();

            // TODO: Update guessedWords
            // TODO: Check against secretWord and update success if needed
            setCurrentGuess('');
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
  success: PropTypes.bool,
};

export default Input;
