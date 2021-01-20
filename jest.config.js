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
    "^@/generated(.*)$": "<rootDir>/src/generated$1",
    "^@/pages(.*)$": "<rootDir>/src/pages$1",
    "^@/components(.*)$": "<rootDir>/src/components$1",
    "^@/hooks(.*)$": "<rootDir>/src/hooks$1",
    "^@/lib(.*)$": "<rootDir>/src/lib$1",
    "^@/utils(.*)$": "<rootDir>/src/utils$1",
    "^@/types(.*)$": "<rootDir>/src/types$1",
    "^@/styles(.*)$": "<rootDir>/src/styles$1",
    "^@/assets(.*)$": "<rootDir>/src/assets$1"
  },
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$"],
  transform: {
    "^.+\\.(ts|tsx)$": "babel-jest"
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"]
}
