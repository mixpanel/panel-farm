module.exports = {
  suites: [
    `test/browser/build/index.html`,
  ],
  verbose: false,
  plugins: {
    local: {
      disabled: true,
      browsers: [
        `chrome`,
        `firefox`,
      ],
    },
    sauce: {
      disabled: true,
      tunnelOptions: {
        connectRetries: 5,
      },
      browsers: [
        {
          browserName: `chrome`,
          version: `latest`,
          platform: `OS X 10.12`,
        },
        {
          browserName: `firefox`,
          version: `latest`,
          platform: `OS X 10.12`,
        },
        {
          browserName: `safari`,
          version: `latest`,
          platform: `OS X 10.12`,
        },
        {
          browserName: `microsoftedge`,
          version: `latest`,
          platform: `Windows 10`,
        },
      ],
    },
  },
};
