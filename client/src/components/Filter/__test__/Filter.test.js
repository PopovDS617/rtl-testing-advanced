import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Filter from '../Filter';

const setup = () => render(<Filter filters={{}} setFilters={() => {}} />);

describe('Filter', () => {
  test('should be able to change value of favourite select', () => {
    setup();
    const select = screen.getByLabelText(/favourite/i);

    expect(select.value).toBe('any');
    userEvent.selectOptions(select, 'favoured');
    expect(select.value).toBe('favoured');
    userEvent.selectOptions(select, 'not favoured');
    expect(select.value).toBe('not favoured');
  });

  test('should be able to change value of gender select', () => {
    setup();

    const select = screen.getByLabelText('Gender');

    expect(select.value).toBe('any');

    userEvent.selectOptions(select, 'male');
    expect(select.value).toBe('male');

    userEvent.selectOptions(select, 'female');
    expect(select.value).toBe('female');
  });
});
