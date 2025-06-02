// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'

// Mock date-fns to ensure consistent date formatting in tests
jest.mock('date-fns', () => {
  const originalDateFns = jest.requireActual('date-fns');
  return {
    ...originalDateFns,
    formatDistanceToNow: jest.fn((date, options) => {
      // Return a fixed string or format based on a fixed current date
      // For simplicity, returning a generic fixed string.
      // You could make this more sophisticated if needed.
      return 'mocked time ago';
    }),
  };
});
