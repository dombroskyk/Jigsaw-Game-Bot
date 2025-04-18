import { createDefaultEsmPreset, type JestConfigWithTsJest } from 'ts-jest'

const defaultEsmPreset = createDefaultEsmPreset();

const jestConfig: JestConfigWithTsJest = {
  testEnvironment: "node",
  ...defaultEsmPreset,
  "transform": {
    "^.+\\.[t|j]sx?$": "babel-jest"
  },
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
};

export default jestConfig;