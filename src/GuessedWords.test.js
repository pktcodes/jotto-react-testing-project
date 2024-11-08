import { shallow } from 'enzyme';

import GuessedWords from './GuessedWords';

test('renders guessed words component without error', () => {
  const wrapper = shallow(<GuessedWords />);
  const component = wrapper.find('[data-test="guessed-words-component"]');
  expect(component.length).toBe(1);
});
