// import path from 'path';

/* eslint-disable */
export default {
  displayName: 'integration-test',
  preset: '../../jest.preset.js',
  setupFilesAfterEnv: ['./jest-setup.ts'],
  reporters: [
    'default',
    [
      'jest-junit',
      { outputDirectory: 'coverage/libs/integration-test', outputName: 'junit.xml' },
    ],
  ],
  // setupFilesAfterEnv: [path.join(__dirname, 'global-setup.js')],
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nx/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nx/react/babel'] }],
  },
  transformIgnorePatterns: [
    '/node_modules/(?!@qubejs/ui-material-base|react-dnd|core-dnd|@react-dnd|dnd-core|react-dnd-html5-backend|gsap|d3|internmap|delaunator|robust-predicates)',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/libs/integration-test',
};
