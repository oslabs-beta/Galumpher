
import React from 'react';
import { getByTestId, getByText, render, screen, cleanup } from '@testing-library/react';
import Header from '../src/client/components/Header';

afterEach(() => {
  cleanup(); // Resets the DOM after each test suite
});

describe('Heading testing', () => {
  test( 'render head', () => {
    render(<Header />); 
    expect(screen.getByText(/Galumpher/i)).toBeInTheDocument;
  });
});