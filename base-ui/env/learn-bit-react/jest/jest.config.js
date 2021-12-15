// Override the Jest config to ignore transpiling from specific folders

const reactJestConfig = require('@teambit/react/jest/jest.config');
const {
  generateNodeModulesPattern
} = require('@teambit/dependencies.modules.packages-excluder');

const packagesToExclude = [
  '@learn-bit-react/base-ui.ui.link',
  '@teambit/base-react.navigation.link'
];

module.exports = {
  ...reactJestConfig,
  transformIgnorePatterns: [
    '^.+\\.module\\.(css|sass|scss)$',
    generateNodeModulesPattern({ packages: packagesToExclude })
  ]
};
