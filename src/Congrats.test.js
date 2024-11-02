import Enzyme, { shallow, ShallowWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Congrats from './Congrats';

import { findByTestAttribute } from '../test/utils';

Enzyme.configure({ adapter: new Adapter() });

/**
 * Factory function to create a ShallowWrapper for the Congrats component
 * @function setup
 * @param {success} props
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  return shallow(<Congrats {...props} />);
};

test('renders congrats component without error', () => {
  const wrapper = setup();
  expect(wrapper.exists()).toBe(true);
});

test('renders no text when `success` prop is false', () => {});

test('renders non-empty congrats message when `success` prop is true', () => {
  const wrapper = setup();
  const congratsMessage = findByTestAttribute(wrapper, 'congrats-message');
  console.log(congratsMessage.debug());
});
