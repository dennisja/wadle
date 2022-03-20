import {
  within,
  render,
  screen,
  waitFor,
  fireEvent,
} from '@testing-library/react';
import App from '../App';

describe('App', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('renders page title', () => {
    const appTitleElement = screen.getByText(/Wadle/i);
    expect(appTitleElement).toBeInTheDocument();
  });

  test('notifies user when they click page title', async () => {
    const toastTitleText = 'Look at you';
    const appTitle = screen.getByText('Wadle');
    appTitle.click();
    const toastTitle = await screen.findByText(toastTitleText);
    expect(toastTitle).toBeInTheDocument();

    const closeButton = within(
      toastTitle.parentElement!.parentElement!
    ).getByLabelText('Close Toast');
    fireEvent.click(closeButton);

    await waitFor(() => {
      expect(screen.queryByText(toastTitleText)).toBe(null);
    });
  });
});
