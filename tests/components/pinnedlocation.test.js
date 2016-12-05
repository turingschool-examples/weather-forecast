import React from 'react';
import { shallow, mount } from 'enzyme';

import PinnedWeather from '../../src/components/PinnedWeather';

describe('PinnedWeather', () => {

  it('has the id of header', () => {
    const wrapper = shallow(<PinnedWeather className='pinned-weather' />);

    expect(wrapper.is('.pinned-weather')).toEqual(true);
  });

});
