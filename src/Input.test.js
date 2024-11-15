import { shallow } from 'enzyme';

import { findByTestAttribute } from '../test/utils';
import Input from './Input';

/**
 * Factory function to create a ShallowWrapper for the Input component
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */
const setup = () => {
  return shallow(<Input />);
};

test('renders input component without error', () => {
  const wrapper = setup();
  const inputComponent = findByTestAttribute(wrapper, 'input-component');
  expect(inputComponent.length).toBe(1);
});
