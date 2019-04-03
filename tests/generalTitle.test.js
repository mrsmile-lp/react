import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import GeneralTitle from '../src/components/generalTitle';

configure({ adapter: new Adapter() });

it('general title is rendered normally', () => {
    const component = shallow(
        <GeneralTitle/>
    );
    expect(component.text()).toEqual('netflixroulette');
})