import { render, screen } from '@testing-library/react';
import App from './App';



test('it should be in the dom', () => {

  render(<App />);
  const linkElement = screen.getByText(/testing1/i);

  expect(linkElement).toBeInTheDocument();
});

