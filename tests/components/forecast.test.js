import React from 'react';
import { shallow, mount } from 'enzyme';

import Forecast from '../../src/components/forecast';

describe('Forecast', () => {
  it('renders a container that has the className of extended-container', () => {
    const wrapper = shallow(<Forecast className='extended-container'/>);

  expect(wrapper.is('.extended-container')).toEqual(true);
  });

});
