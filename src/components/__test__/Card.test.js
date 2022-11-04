import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Card from '../Card';

const cardProps = {
  name: 'Josh',
  phone: '8-928-111-11-11',
  email: 'test@email.com',
  image: {
    url: 'https://images.unsplash.com/photo-1561948955-570b270e7c36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2101&q=80',
    alt: 'cat pic',
  },
  favoured: false,
};

describe('Card', () => {
  test('should show name of a cat', () => {
    render(<Card {...cardProps}></Card>);

    expect(
      screen.getByRole('heading', {
        name: /josh/i,
      })
    ).toBeInTheDocument();
  });

  test('should show a phone number', () => {
    render(<Card {...cardProps}></Card>);

    expect(screen.getByText(/8-928-111-11-11/i)).toBeInTheDocument();
  });

  test('should show an email address', () => {
    render(<Card {...cardProps}></Card>);

    expect(screen.getByText(/test@email.com/i)).toBeInTheDocument();
  });

  test('should show an image with correct src', () => {
    render(<Card {...cardProps}></Card>);

    expect(screen.getByAltText(/cat pic/i).url).toBe(cardProps.image.src);
  });

  test('should show an outlined heart', () => {
    render(<Card {...cardProps}></Card>);

    expect(screen.queryByAltText(/filled heart/i)).not.toBeInTheDocument();
    expect(screen.getByAltText(/outlined heart/i)).toBeInTheDocument();
  });

  test('should show a filled heart', () => {
    render(<Card {...cardProps} favoured={true}></Card>);

    expect(screen.queryByAltText(/outlined heart/i)).not.toBeInTheDocument();
    expect(screen.getByAltText(/filled heart/i)).toBeInTheDocument();
  });

  test('should toggle heart status', () => {
    render(<Card {...cardProps}></Card>);

    userEvent.click(screen.getByRole('button'));

    expect(screen.getByAltText(/filled heart/i)).toBeInTheDocument();
    expect(screen.queryByAltText(/outlined heart/i)).not.toBeInTheDocument();

    userEvent.click(screen.getByRole('button'));

    expect(screen.getByAltText(/outlined heart/i)).toBeInTheDocument();
    expect(screen.queryByAltText(/filled heart/i)).not.toBeInTheDocument();
  });
});
