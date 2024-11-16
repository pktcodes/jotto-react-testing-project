import { shallow } from 'enzyme';

import { findByTestAttribute, validateProps } from '../test/utils';
import Input from './Input';

const defaultProps = {
  secretWord: 'party',
};

/**
 * Factory function to create a ShallowWrapper for the Input component
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Input {...setupProps} />);
};

test('renders input component without error', () => {
  const wrapper = setup();
  const inputComponent = findByTestAttribute(wrapper, 'input-component');
  expect(inputComponent.length).toBe(1);
});

test('check the expected props', () => {
  const expectedProps = { ...defaultProps };
  validateProps(Input, expectedProps);
});
