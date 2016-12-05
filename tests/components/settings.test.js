import React from 'react';
import { shallow, mount } from 'enzyme';

import SettingsForm from '../../src/components/SettingsForm';

describe('SettingsForm', () => {
  it('renders a container that has the id of header', () => {
    const wrapper = shallow(<SettingsForm className='settings-form' />);

  expect(wrapper.is('.settings-form')).toEqual(true);
  });

  it('has an input element', () => {
    const wrapper = shallow(<SettingsForm />)

    expect(wrapper.find('input').length, 1)
  })

  it('has a button to submit pinned locations', () => {
    const wrapper = shallow(<SettingsForm />)

    expect(wrapper.find('button').length, 1)
  })

  // it('should call the onClick prop when clicked', () => {
  //   const onClickMock = jest.fn();
  //   const wrapper = mount(
  //     <SettingsForm
  //       handleSubmit={onClickMock}
  //     />
  //   );
  //
  //   wrapper.find('#submitbtn').simulate('click');
  //
  //   expect(onClickMock).toBeCalled();
  // });

});
