import { render, screen } from '@testing-library/react';
import CardList from '../CardList';
import cats from '../../../mocks/cats.json';
import { PetsContext } from '../../Pets/Pets';

describe('CardList', () => {
  test('should render 5 Card components', () => {
    render(
      <PetsContext.Provider value={{ cats, setCatsList: () => {} }}>
        <CardList cats={cats} />
      </PetsContext.Provider>
    );

    expect(screen.getAllByRole('article').length).toBe(5);
  });
});
