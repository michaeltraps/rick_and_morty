module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleNameMapper: {
    '.(css|less|sass|scss)$': '<rootDir>/config/CSSStub.js',
    '.(gif)$': '<rootDir>/config/CSSStub.js',
    '.+.(png|jpg|ttf|woff|woff2)$': 'identity-obj-proxy',
  },
};
