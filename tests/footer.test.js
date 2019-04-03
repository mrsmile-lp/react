import React from 'react';
import {shallow} from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Footer} from '../src/components/footer';

configure({ adapter: new Adapter() });


it ('renders correctly', () => {
    const component = shallow(
        <div className="footer">netflixroulette</div>
    );
    expect(Footer).toEqual(component);
});