import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MainPage from './MainPage';

configure({ adapter: new Adapter() });

describe('MainPage Component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<MainPage />);
    });

    it('should exist', () => {
        expect(wrapper).toBeTruthy();
    });
  
    it('should have one heading', () => {
        expect(wrapper.find('#heading').type()).toEqual('h2');
    });
});
