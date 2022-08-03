
import React from 'react';
import { getByTestId, getByText, render, screen, cleanup } from '@testing-library/react';

//import MetricsContainer from '../src/client/components/dashboard/MetricsContainer';
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

//test that there is a cpu graph 
//test that there is a memory components
//test that there is a input/output component 
describe('Metrics Container Testing', () => {
  test('')
})