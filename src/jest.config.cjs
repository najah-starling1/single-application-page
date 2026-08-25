module.exports = {
  testEnvironment: "jsdom",

  setupFilesAfterEnv: [
    "<rootDir>/src/setupTests.js",
  ],

  transform: {
    "^.+\\.[jt]sx?$": "babel-jest",
  },

  transformIgnorePatterns: [
    "/node_modules/",
  ],

  moduleFileExtensions: [
    "js",
    "jsx",
  ],

  testMatch: [
    "**/src/tests/**/*.test.jsx",
  ],

  clearMocks: true,
};