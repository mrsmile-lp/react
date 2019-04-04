import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '../src/components/footer';

it('Footer component renders correctly', () => {
    const component = renderer.create(
        <Footer/>
    );
    let tree = component.toJSON();
    expect(Footer).toMatchSnapshot();
});