import React from 'react';
import { shallow, mount } from 'enzyme';
import Main from './Main';

describe('Main components', () => {
  it('renders as a div tag', () => {
    const wrapper = shallow(<Main />);

    expect(wrapper.contains(div).toEqual(true));
  });
});
