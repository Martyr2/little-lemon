import { render, screen } from '@testing-library/react';
import App from './App';
import Reservation from './components/Pages/Reservation';

test('Renders the Reservation heading', () => {
  render(<Reservation />);
  const headingElement = screen.getByText("Book Table");
  expect(headingElement).toBeInTheDocument();
});

// test('Testing the initializeTimes', () => {
//   render(<Reservation />);
//   const headingElement = screen.getByText("Book Now");
//   expect(headingElement).toBeInTheDocument();
// })

// test('Testing the updateTimes', () => {
//   render(<Reservation />);
//   const headingElement = screen.getByText("Book Now");
//   expect(headingElement).toBeInTheDocument();
// })
