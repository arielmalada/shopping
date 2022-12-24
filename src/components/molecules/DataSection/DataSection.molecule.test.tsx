import React from 'react';
import renderer from 'react-test-renderer';
import DataSection from './DataSection.molecule';

describe('Data Section', () => {
  it('should be able to render without crashing', () => {
    const tree = renderer.create(<DataSection />).toJSON();

    expect(tree).toMatchSnapshot();
  });
 
});