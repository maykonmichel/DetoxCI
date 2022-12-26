import {Config} from '@jest/types';

const config: Config.InitialOptions = {
  rootDir: '..',
  preset: 'ts-jest',
  testMatch: ['<rootDir>/specs/*.e2e.ts'],
  testTimeout: 120000,
  maxWorkers: 1,
  globalSetup: 'detox/runners/jest/globalSetup',
  globalTeardown: 'detox/runners/jest/globalTeardown',
  reporters: ['detox/runners/jest/reporter'],
  testEnvironment: 'detox/runners/jest/testEnvironment',
  verbose: true,
};

export default config;
