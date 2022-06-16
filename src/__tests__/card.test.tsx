import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from '../components/index';
import Props from '../components/card/Card';

// initiate render test for Characters component
describe('Card component renders successfully', () => {
  test('should render Card component', () => {
    render(<Card />);
    const element = screen.getByTestId('Card-1');
    expect(element).toBeInTheDocument();
  });
});
