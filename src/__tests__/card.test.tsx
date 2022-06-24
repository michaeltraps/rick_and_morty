import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from '../components/index';
import '@testing-library/jest-dom';
import 'jest-fetch-mock';
import userEvent from '@testing-library/user-event';

describe('Card component renders successfully', () => {
  const stub = jest.fn();
  render(
    <Card name='name' status='status' species='species' img='img' location='location' getLocation={stub} setSelected={stub} setModal={stub} modal={true} />
  );
  const element = screen.getByTestId('Card-1');
  userEvent.click(element);
  it('should render full card component', () => {
    expect(element).toBeInTheDocument();
  });
  it('should display character name', () => {
    expect(element).toHaveTextContent('name');
  });
  it('should display character status', () => {
    expect(element).toHaveTextContent('status');
  });
  it('should display character species', () => {
    expect(element).toHaveTextContent('species');
  });
  it('onclick fires all functions', () => {
    expect(stub).toHaveBeenCalledTimes(3);
  });
});
