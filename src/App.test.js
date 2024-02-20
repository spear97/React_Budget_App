/*
    This test case checks if the 'learn react' link is rendered in the App component.
    It uses the render method from the testing-library/react to render the App component.
    Then, it retrieves the element containing the text 'learn react' using the getByText method.
    Finally, it asserts that the linkElement is present in the document.
*/
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
