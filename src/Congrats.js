/**
 * Functional react component for Congratulatory message.
 * @function
 * @param {object} props - React props
 * @returns {JSX.Element} - Rendered message (or null if `success` prop is false
 */
const Congrats = ({ success }) => {
  return (
    <div data-test="congrats-component">
      {success ? (
        <div data-test="congrats-message">
          Congratulations! You have guessed the word!
        </div>
      ) : null}
    </div>
  );
};

export default Congrats;
