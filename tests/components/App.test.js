
import React from 'react';
import { shallow, mount } from 'enzyme';

import App from '../../src/components/App';

describe('App', () => {
  it('renders a container that has the className of app', () => {
    const wrapper = shallow(<App className='app'/>);

  expect(wrapper.is('.app')).toEqual(true);
  });
