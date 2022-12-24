import React from 'react';
import renderer from 'react-test-renderer';
import RelatedSection from './RelatedSection.organism';

describe('Related Section', () => {
  it('should be able to render without crashing', () => {
    const tree = renderer.create(<RelatedSection />).toJSON();

    expect(tree).toMatchSnapshot();
  });
 
});