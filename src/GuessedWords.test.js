import { shallow } from 'enzyme';

import GuessedWords from './GuessedWords';
import { validateProps } from '../test/utils';

const defaultProps = {
  guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }],
};

/**
 * Factory function to create a ShallowWrapper for the GuessedWords component
 * @function setup
 * @param {Object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
};

test('renders guessed words component without error', () => {
  const wrapper = setup();
  const component = wrapper.find('[data-test="guessed-words-component"]');
  expect(component.length).toBe(1);
});

test('does not throw warning with expected props', () => {
  validateProps(GuessedWords, defaultProps);
});

describe('if there are no words guessed', () => {});

describe('if there are words guessed', () => {});
