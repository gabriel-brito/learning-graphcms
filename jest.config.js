const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: '<rootDir>',
});

const customJestConfig = {
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/components/**/*.ts(x)'],
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['/node_modules', '/.next'],
  moduleDirectories: ['<rootDir>', 'node_modules'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
};

module.exports = createJestConfig(customJestConfig);
