import "../../../../../src/index";

module.exports = {
  solidity: '0.7.3',
  localNetworksConfig: __dirname + '/../../local/hardhat.config.json',
  networks: {
    shouldNotBeOverridden: {
      a: 1,
      b: 'z',
      c: true,
      url: "https://",
      someDefaultValue: undefined
    },
    shouldBeExtended: {
      d: 200,
      e: 'Z',
      url: "https://",
    },
    shouldBePartiallyExtended: {
      a: 1,
      d: 200,
      e: 'Z',
      url: "https://",
    },
    shouldBeOverriddenByDefaultConfig: {
      url: '1'
    }
  }
}
