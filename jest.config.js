module.exports = {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    '<rootDir>/src/controllers/**/*.ts'
  ],
  preset: 'ts-jest',
  clearMocks: true,
  testEnvironment: 'node',
  transform: {
    '.+\\.spec.ts$': 'ts-jest',
  },
  moduleNameMapper: {
    '@/(.*)':'<rootDir>/src/$1',
  },
  coverageReporters: [
    "text-summary",
     "lcov",
   ],
  transformIgnorePatterns: [
      "/node_modules/"
  ],
  testMatch: [
    '<rootDir>/__tests__/**/*.spec.ts',
  ]
};
