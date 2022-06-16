import React from 'react';
import { render, screen } from '@testing-library/react';
import { Characters } from '../containers/index';
import '@testing-library/jest-dom';
import 'jest-fetch-mock';

describe('Character component renders successfully', () => {
  it('should render Character component', () => {
    render(<Characters />);
    const element = screen.getByTestId('Characters-1');
    expect(element).toBeInTheDocument();
  });
});
