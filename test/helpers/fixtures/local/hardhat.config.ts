module.exports = {
  solidity: '0.7.3',
  defaultConfig: {
    url: 'https://default',
    someDefaultValue: 1
  },
  networks: {
    shouldNotBeOverridden: {},
    shouldBeExtended: {
      a: 100,
      b: 'b',
      c: false,
    },
    shouldBePartiallyExtended: {
      a: 100,
      b: 'b',
      c: false,
    },
    shouldBeCopiedFromLocalConfig: {
      x: 'a',
      y: 2,
      z: true,
    }
  }
}
