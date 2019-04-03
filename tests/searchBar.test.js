import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import SearchBar from '../src/components/searchBar';

configure({ adapter: new Adapter() });

it('searchBar component renders normally', () => {
    const component = shallow(
        <SearchBar/>
    );
    expect(component.equals(<div className="search-bar"><input placeholder="search"></input></div>)).toEqual(true);
});