module.exports = {
  roots: ["<rootDir>"],
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json"
    }
  },
  moduleFileExtensions: ["js", "ts", "tsx", "json"],
  testPathIgnorePatterns: ["<rootDir>[/\\\\](node_modules|.next)[/\\\\]"],
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname"
  ],
  moduleNameMapper: {
    "^@/pages(.*)$": "<rootDir>/src/pages$1",
    "^@/config(.*)$": "<rootDir>/src/config$1",
    "^@/components(.*)$": "<rootDir>/src/components$1",
    "^@/layout(.*)$": "<rootDir>/src/layout$1",
    "^@/hooks(.*)$": "<rootDir>/src/hooks$1"
  },
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$"],
  transform: {
    "^.+\\.(ts|tsx)$": "babel-jest"
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"]
}
