import React from 'react';
import renderer from 'react-test-renderer';
import Content from '../src/components/content';

it('content component is rendered normally', () => {
    const component = renderer.create(
        <Content/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})