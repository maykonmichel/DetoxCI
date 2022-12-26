/** @type {Detox.DetoxConfig} */
module.exports = {
  testRunner: {
    args: {
      config: 'e2e/config/jest.config.ts',
    },
  },
  apps: {
    'android.release': {
      type: 'android.apk',
      binaryPath: 'android/app/build/outputs/apk/release/app-release.apk',
      build: 'cd android ; ./gradlew assembleRelease assembleAndroidTest -DtestBuildType=release ; cd -'
    }
  },
  devices: {
    attached: {
      type: 'android.attached',
      device: {
        adbName: '.*'
      }
    },
    e2e: {
      type: 'android.emulator',
      device: {
        avdName: 'e2e'
      }
    }
  },
  configurations: {
    'android.att.release': {
      device: 'attached',
      app: 'android.release'
    },
    'android.e2e.release': {
      device: 'e2e',
      app: 'android.release',
      artifacts: {
        plugins: {
          log: 'all',
          video: 'all'
        }
      }
    }
  },
};
