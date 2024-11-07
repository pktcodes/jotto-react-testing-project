import React from 'react';

import { shallow } from 'enzyme';

import App from './App';

test('renders app component without error', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.exists()).toBe(true);
});

// exists() - Returns whether or not any nodes exist in the wrapper.
