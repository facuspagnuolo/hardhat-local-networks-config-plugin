import { assert } from 'chai'
import { parseLocalNetworksConfigPath } from '../src/utils'
import { HardhatUserConfig } from 'hardhat/types'
import path from 'path'
import os from 'os'

describe('utils', function () {
  describe('function parseLocalNetworksConfigPath', function () {
    const projectRoot = path.resolve("/project/root")

    const testCases = new Map<string, any[]>([
      ['absolute path', ['/workspace/config/networks.json', '/workspace/config/networks.json']],
      ['relative path', ['local/networks.json', '/project/root/local/networks.json']],
      ['relative path with ./', ['./local/networks.json', '/project/root/local/networks.json']],
      ['relative path with ../', ['../local/networks.json', '/project/local/networks.json']],
      ['home path', ['~/.hardhat/networks.json', os.homedir() + '/.hardhat/networks.json']],
      ['empty path', ['', undefined],],
    ])

    testCases.forEach((testData, testName) => {
      it(`resolves path for ` + testName, function () {
        const [inputPath, expectedResult] = testData
        const userConfig: HardhatUserConfig = {
          localNetworksConfig: inputPath,
        }

        assert.equal(parseLocalNetworksConfigPath(userConfig, projectRoot), expectedResult)
      })
    })
  })
})
