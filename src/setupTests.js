// By default, CRA configures Jest to run setupTests.js before each test file

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Enzyme is configured through Adapter to let know which version React code is expected by Enzyme
Enzyme.configure({ adapter: new Adapter() });
