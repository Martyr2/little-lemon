import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from "react-router";
import Reservation from './components/Pages/Reservation';

test('Renders the booking table button on reservation page', () => {
  render(
    <MemoryRouter>
      <Reservation />
    </MemoryRouter>
  );

  const button = screen.getByRole("button", { name: /book table/i });
  expect(button).toBeInTheDocument();
});

test('Testing the initialization of times', async () => {
  render(
    <MemoryRouter>
      <Reservation />
    </MemoryRouter>
  );

  // New times from should appear
  expect(await screen.findByText("17:00")).toBeInTheDocument();
});


test('Testing the updateTimes', async () => {
  render(
    <MemoryRouter>
      <Reservation />
    </MemoryRouter>
  );

  // Grab the date input
  const dateInput = screen.getByLabelText(/Select Date/i);

  // Simulate picking May 1, 2026
  fireEvent.change(dateInput, { target: { value: "05/01/2026" } });

  // New times from should appear
  expect(await screen.findByText("19:00")).toBeInTheDocument();
  expect(await screen.findByText("21:30")).toBeInTheDocument();
});
