import React from 'react';
import { shallow, mount } from 'enzyme';

import HomePage from './HomePage';

it('renders the name of the application', () => {
 const wrapper = shallow(<HomePage />);
 const title = <h1>Home</h1>
 expect(wrapper.contains(title)).toEqual(true);
});
