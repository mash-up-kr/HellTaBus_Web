module.exports = {
  setupFilesAfterEnv: ['test/setupTests.ts'],
  testEnvironment: 'jest-environment-jsdom',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
    '#/(.*)$': '<rootDir>/test/$1',
    '\\.(css|styl|less|sass|scss)$': '<rootDir>/test/styleMock.ts',
  },
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '<rootDir>/(test/unit/**/*.test.(js|jsx|ts|tsx))'],
};
