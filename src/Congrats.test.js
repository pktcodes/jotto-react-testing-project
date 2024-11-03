import Enzyme, { shallow, ShallowWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { findByTestAttribute } from '../test/utils';
import Congrats from './Congrats';

Enzyme.configure({ adapter: new Adapter() });

/**
 * Factory function to create a ShallowWrapper for the Congrats component
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  return shallow(<Congrats {...props} />);
};

test('renders congrats component without error', () => {
  const wrapper = shallow(<Congrats />);
  const component = wrapper.find('[data-test="congrats-component"]');
  expect(component.length).toBe(1);
});

test('renders no text when `success` prop is false', () => {
  const wrapper = shallow(<Congrats success={false} />);
  const component = wrapper.find('[data-test="congrats-component"]');
  expect(component.text().length).toBe(0);
});

test('renders non-empty congrats message when `success` prop is true', () => {
  const wrapper = shallow(<Congrats success={true} />);
  const message = wrapper.find('[data-test="congrats-message"]');
  expect(message.text().length).not.toBe(0);
});
