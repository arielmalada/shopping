import React from 'react';
import renderer from 'react-test-renderer';
import DetailPage from './DetailPage.page';

describe('Detail Page', () => {
  it('should be able to render without crashing', () => {
    const tree = renderer.create(<DetailPage />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});