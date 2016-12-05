import React from 'react';
import { shallow, mount } from 'enzyme';

import SettingsForm from '../../src/components/SettingsForm';

describe('SettingsForm', () => {
  it('has the id of header', () => {
    const wrapper = shallow(<SettingsForm className='settings-form' />);

  expect(wrapper.is('.settings-form')).toEqual(true);
});
});
