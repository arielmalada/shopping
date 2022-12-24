import React from 'react';
import renderer from 'react-test-renderer';
import CheckoutSection from './CheckoutSection.molecule';
import {act, fireEvent, render, screen} from '@testing-library/react';

describe('Checkout Section', () => {
  it('should be able to render without crashing', () => {
    const tree = renderer.create(<CheckoutSection />).toJSON();

    expect(tree).toMatchSnapshot();
  });
  it('Test click event', async () => {
    const mockCallBack = jest.fn();

    render((<CheckoutSection onClick={mockCallBack} />));
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      fireEvent.click(await screen.findByTestId('test_addtocart'));
    });
    expect(mockCallBack).toHaveBeenCalled();
  });
});