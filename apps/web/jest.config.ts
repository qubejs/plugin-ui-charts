/* eslint-disable */
export default {
  displayName: 'web',
  preset: '../../jest.preset.js',
  setupFilesAfterEnv: ['./jest-setup.ts'],
  reporters: [
    'default',
    [
      'jest-junit',
      { outputDirectory: 'coverage/apps/web', outputName: 'junit.xml' },
    ],
  ],
  // setupFilesAfterEnv: [path.join(__dirname, 'global-setup.js')],
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nx/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nx/react/babel'] }],
  },
  transformIgnorePatterns: [
    '/node_modules/(?!@qubejs/ui-material-base|@qubejs/web-react|react-dnd|core-dnd|@react-dnd|dnd-core|react-dnd-html5-backend|gsap)',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/apps/web',
};
