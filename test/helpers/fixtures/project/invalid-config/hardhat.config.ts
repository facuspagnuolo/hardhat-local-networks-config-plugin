import "../../../../../src/index";

module.exports = {
  solidity: '0.7.3',
  // @ts-ignore - ignoring to force an invalid local network config value
  localNetworksConfig: {},
  networks: {
    network1: {
      // @ts-ignore - ignoring to force an invalid network value
      a: 1,
      b: 'z',
      c: true,
      url: 'https://'
    },
    network2: {
      // @ts-ignore - ignoring to force an invalid network value
      d: 200,
      e: 'Z',
      url: 'https://'
    },
    network3: {
      // @ts-ignore - ignoring to force an invalid network value
      a: 1,
      b: 'z',
      c: true,
      d: 200,
      e: 'Z',
      url: 'https://'
    }
  }
}
