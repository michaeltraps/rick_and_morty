import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from '../components/index';
import '@testing-library/jest-dom';

describe('Card component renders successfully', () => {
  it('should render Card component', () => {
    render(<Header />);
    const element = screen.getByTestId('Header-1');
    expect(element).toBeInTheDocument();
  });
});
