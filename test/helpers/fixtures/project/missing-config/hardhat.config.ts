import "../../../../../src/index";

module.exports = {
  solidity: '0.7.3',
  localNetworksConfig: '~/xyz/hardhat.config.ts',
  networks: {
    network1: {
      b: 'z',
      c: true,
      url: 'https://'
    },
    network2: {
      d: 200,
      e: 'Z',
      url: 'https://'
    },
    network3: {
      a: 1,
      b: 'z',
      c: true,
      d: 200,
      e: 'Z',
      url: 'https://'
    }
  }
}
