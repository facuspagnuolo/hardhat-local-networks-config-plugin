// We load the plugin here.
// We recommend using loadPluginFile in tests, as using usePlugin from within
// a plugin can interfere with any build step you have (e.g. TypeScript).
import { loadPluginFile } from '@nomiclabs/buidler/plugins-testing'
import path from 'path'
loadPluginFile(__dirname + '/../../../../../src/index')

module.exports = {
  localNetworksConfig: __dirname + '/../../local/buidler.config.json',
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
