import React from 'react';
import renderer from 'react-test-renderer';
import PictureSection from './PictureSection.molecule';

describe('Picture Section', () => {
  it('should be able to render without crashing', () => {
    const tree = renderer.create(<PictureSection />).toJSON();

    expect(tree).toMatchSnapshot();
  });
 
});