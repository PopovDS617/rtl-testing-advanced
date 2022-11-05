import { render, screen } from '@testing-library/react';
import Pets from '../Pets';

describe('CardList', () => {
  test('should render the correct amount or Cards', () => {
    render(<Pets />);

    expect(screen.getAllByRole('article').length).toBe(5);
  });
});
