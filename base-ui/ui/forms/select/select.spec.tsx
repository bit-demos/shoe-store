import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { BasicSelect } from './select.composition';

it('checks value changes when user selects a new value', () => {
  render(<BasicSelect />);
  const basicSelect = screen.getByRole('combobox');
  expect(basicSelect).toHaveValue('32');
  userEvent.selectOptions(basicSelect, '33');
  expect(basicSelect).toHaveValue('33');
});
