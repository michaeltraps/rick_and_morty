import React from 'react';
import { render, screen } from '@testing-library/react';
import { Footer } from '../components/index';
import '@testing-library/jest-dom';

describe('Footer component renders successfully', () => {
  it('should render Footer component', () => {
    render(<Footer />);
    const element = screen.getByTestId('Footer-1');
    expect(element).toBeInTheDocument();
  });
});
