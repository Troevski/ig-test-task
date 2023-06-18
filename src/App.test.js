import { render, screen } from '@testing-library/react';
import App from './App';
import Main from './components/main/Main';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Main component', async () => {

  const mockFetchData = jest.fn();
  const mockFetchAccountType = jest.fn();

  render(<Main fetchData={mockFetchData} fetchAccountType={mockFetchAccountType} />);

  expect(screen.getByText('Name')).toBeInTheDocument();
  expect(screen.getByText('Profit & Loss')).toBeInTheDocument();
  expect(screen.getByText('Account Type')).toBeInTheDocument();

  expect(screen.getByRole('status')).toBeInTheDocument();

  expect(mockFetchData).toHaveBeenCalledTimes(1);
  expect(mockFetchAccountType).toHaveBeenCalledTimes(1);

  await screen.findByText('New Spread bet');

  expect(screen.queryByRole('status')).toBeNull();
  expect(screen.getByText('New Spread bet')).toBeInTheDocument();
  expect(screen.getByText('$ 20000000')).toBeInTheDocument();
  expect(screen.getByText('Forex account')).toBeInTheDocument();
});
