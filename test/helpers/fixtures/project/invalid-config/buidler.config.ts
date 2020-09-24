// We load the plugin here.
// We recommend using loadPluginFile in tests, as using usePlugin from within
// a plugin can interfere with any build step you have (e.g. TypeScript).
import { loadPluginFile } from '@nomiclabs/buidler/plugins-testing'
loadPluginFile(__dirname + '/../../../../../src/index')

module.exports = {
  localNetworksConfig: {},
  networks: {
    network1: {
      a: 1,
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
