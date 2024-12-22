import React from 'react';

import { shallow } from 'enzyme';

import { findByTestAttribute, validateProps } from '../test/utils';
import Input from './Input';

// Mock entire module for destructuring useState on import
/* const mockSetCurrentGuess = jest.fn();
jest.mock('react', () => {
  return {
    ...jest.requireActual('react'),
    useState: (initialState) => [initialState, mockSetCurrentGuess],
  };
}); */

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

describe('state controlled input field', () => {
  test('state updates upon change of input field value', () => {
    const mockSetCurrentGuess = jest.fn();
    React.useState = jest.fn(() => ['', mockSetCurrentGuess]);

    const wrapper = setup();
    const inputBox = findByTestAttribute(wrapper, 'input-box');

    const mockEvent = { target: { value: 'train' } };
    inputBox.simulate('change', mockEvent);

    expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
  });
});
