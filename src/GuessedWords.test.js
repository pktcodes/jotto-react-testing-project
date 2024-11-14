import { shallow } from 'enzyme';

import GuessedWords from './GuessedWords';
import { findByTestAttribute, validateProps } from '../test/utils';

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

test('renders component without error', () => {
  const wrapper = setup();
  const component = wrapper.find('[data-test="guessed-words-component"]');
  expect(component.length).toBe(1);
});

test('does not throw warning with expected props', () => {
  validateProps(GuessedWords, defaultProps);
});

describe('if there are no words guessed', () => {
  test('render instructions to guess a word', () => {
    const wrapper = setup({ guessedWords: [] });
    const instructions = findByTestAttribute(wrapper, 'guess-instructions');
    expect(instructions.text().length).not.toBe(0);
  });
});

describe('if there are words guessed', () => {
  const guessedWords = [
    { guessedWord: 'train', letterMatchCount: 3 },
    { guessedWord: 'agile', letterMatchCount: 2 },
    { guessedWord: 'party', letterMatchCount: 5 },
  ];

  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords });
  });

  test('render "guessed words" section', () => {
    const guessedWordsNode = findByTestAttribute(wrapper, 'guessed-words');
    expect(guessedWordsNode.length).toBe(1);
  });

  test('check correct number of guessed words', () => {
    const wrapper = setup({ guessedWords });
    const guessedWordNodes = findByTestAttribute(wrapper, 'guessed-word');
    expect(guessedWordNodes.length).toBe(guessedWords.length);
  });
});
