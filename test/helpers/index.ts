import { resetHardhatContext } from 'hardhat/plugins-testing'
import { HardhatRuntimeEnvironment } from 'hardhat/types'
import path from "path"

declare module 'mocha' {
  interface Context {
    hre: HardhatRuntimeEnvironment
  }
}
export function useEnvironment(fixtureProjectName: string) {
  let previousCWD: string

  beforeEach('Loading hardhat environment', function() {
    const projectPath = path.join(__dirname, 'fixtures/project', fixtureProjectName)

    previousCWD = process.cwd()
    process.chdir(projectPath)

    this.hre = require('hardhat')
    this.userNetworks = require(`${projectPath}/hardhat.config.ts`).networks
    this.resolvedNetworks = this.hre.config.networks
  })

  afterEach('Resetting hardhat', function() {
    resetHardhatContext()
    process.chdir(previousCWD)
  })
}
