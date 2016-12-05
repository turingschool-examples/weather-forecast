import React from 'react';
import { shallow, mount } from 'enzyme';

import PinnedWeather from '../../src/components/PinnedWeather';

describe('PinnedWeather', () => {

  it('has the className of pinned-weather', () => {
    const wrapper = shallow(<PinnedWeather className='pinned-weather' />);

    expect(wrapper.is('.pinned-weather')).toEqual(true);
  });

});
