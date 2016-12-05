import React from 'react';
import { shallow, mount } from 'enzyme';

import ExtendedLocal from '../../src/components/ExtendedLocal';

describe('ExtendedLocal', () => {
  it('has the id of header', () => {
    const wrapper = shallow(<ExtendedLocal className='extended-local' />);

  expect(wrapper.is('.extended-local')).toEqual(true);
  });

});
