import { render, screen } from '@testing-library/react';
import App from './App';


test('renders ballots', () => {
  render(<App />);

  [
    "Best Picture",
    "Best Director",
    "Best Actor",
    "Best Actress",
    "Best Supporting Actor",
    "Best Supporting Actress",
    "Best Visual Effects",
  ].forEach(a=>{
    let linkElement = screen.getByText(a);
    expect(linkElement).toBeInTheDocument();
  })
});

test('count buttons', () => {
  render(<App />);

  expect(screen.getAllByRole('button')).toHaveLength(36);
});