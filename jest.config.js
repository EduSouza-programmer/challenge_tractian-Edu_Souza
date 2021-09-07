module.exports = {
  roots: ['<rootDir>/src'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/**/*.stories.tsx',
    '!src/pages/**/*.tsx',
    '!src/styles/**/*.ts',
    '!src/**/*.mock.ts',
    '!src/components/ThemeProvider/*',
    '!src/components/PageSEO/*',
    '!src/utils/**/*',
    '!src/**/**/*.d.ts',
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['text-summary', 'lcov'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
  },
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
};
