import { render, screen } from '@testing-library/react';
import CardList from '../CardList';
import cats from '../../../mocks/cats.json';

describe('CardList', () => {
  test('should render 5 Card components', () => {
    render(<CardList cats={cats} />);

    expect(screen.getAllByRole('article').length).toBe(5);
  });
});
