module.exports = {
  preset: 'ts-jest',
  verbose: true,
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleNameMapper: {
    '.(png|jpg|webp|ttf|woff|woff2|svg|mp4|gif|css)$': '<rootDir>/config/CSSStub.js',
    '.+.(png|jpg|ttf|woff|woff2)$': 'identity-obj-proxy',
  },
};
