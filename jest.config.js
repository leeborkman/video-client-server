module.exports = {
  collectCoverage: true,

  testPathIgnorePatterns: ['node_modules', 'client/src/*', 'client/cypress/*', 'uploads'],
  coverageThreshold: {
    global: {
      branches: 20,
      functions: 30,
      lines: 50,
      statements: 50
    }
  },


  verbose: true
}
