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
  success: false,
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

describe('render', () => {
  describe('when success is true', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = setup({ success: true });
    });

    test('input component displays without error', () => {
      const inputComponent = findByTestAttribute(wrapper, 'input-component');
      expect(inputComponent.length).toBe(1);
    });

    test('input box does not display', () => {
      const inputBox = findByTestAttribute(wrapper, 'input-box');
      expect(inputBox.exists()).toBe(false);
    });

    test('submit button does not display', () => {
      const submitButton = findByTestAttribute(wrapper, 'submit-button');
      expect(submitButton.exists()).toBe(false);
    });
  });

  describe('when success is false', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = setup({ success: false });
    });

    test('display  input component without error', () => {
      const inputComponent = findByTestAttribute(wrapper, 'input-component');
      expect(inputComponent.length).toBe(1);
    });

    test('display input box', () => {
      const inputBox = findByTestAttribute(wrapper, 'input-box');
      expect(inputBox.exists()).toBe(true);
    });

    test('display submit button', () => {
      const submitButton = findByTestAttribute(wrapper, 'submit-button');
      expect(submitButton.exists()).toBe(true);
    });
  });
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

  test('state gets empty upon the click of submit button', () => {
    const mockSetCurrentGuess = jest.fn();
    React.useState = jest.fn(() => ['', mockSetCurrentGuess]);

    const wrapper = setup();
    const submitButton = findByTestAttribute(wrapper, 'submit-button');

    const mockEvent = { preventDefault: () => {} };
    submitButton.simulate('click', mockEvent);
    expect(mockSetCurrentGuess).toHaveBeenCalledWith('');
  });
});
