import React from 'react';
import { render, screen } from '@testing-library/react';

import HeaderText from './HeaderText';
import { HEADER_TITLE, HEADER_DESCRIPTION } from './constant';

describe('HeaderText component', () => {
  it('renders correct title text', () => {
    render(<HeaderText />);
    expect(screen.getByText(HEADER_TITLE)).toBeInTheDocument();
  });

  it('renders correct description text', () => {
    render(<HeaderText />);
    expect(screen.getByText(HEADER_DESCRIPTION)).toBeInTheDocument();
  });
});
