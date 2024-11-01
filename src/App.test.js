import React from 'react';

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App';

Enzyme.configure({ adapter: new Adapter() });

test('renders non-empty component without crashing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.exists()).toBe(true);
});

// exists() - Returns whether or not any nodes exist in the wrapper.
