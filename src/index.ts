import fs from 'fs'
import path from 'path'
import { homedir } from 'os'
import { DeepReadonly } from 'ts-essentials'
import { extendConfig } from '@nomiclabs/buidler/config'
import { BuidlerConfig, NetworkConfig, Networks, ResolvedBuidlerConfig } from '@nomiclabs/buidler/types'

const BUIDLER_CONFIG_DIR = '.buidler'
const BUIDLER_NETWORK_CONFIG_FILE = 'networks.json'

export interface LocalNetworksConfig {
  networks: Networks
  defaultConfig: NetworkConfig
}

export default function() {
  extendConfig((resolvedConfig: ResolvedBuidlerConfig, userConfig: DeepReadonly<BuidlerConfig>): void => {
    if (!resolvedConfig.networks) resolvedConfig.networks = {}
    const localNetworksConfig = readLocalNetworksConfig(userConfig)

    const userNetworkConfigs = userConfig.networks || []
    Object.entries(userNetworkConfigs).forEach(([networkName, userNetworkConfig]) => {
      resolvedConfig.networks[networkName] = Object.assign(
        {},
        localNetworksConfig.defaultConfig,
        localNetworksConfig.networks[networkName] || {},
        userNetworkConfig
      )
    })

    Object.entries(localNetworksConfig.networks).forEach(([networkName, localNetworkConfig]) => {
      if (!resolvedConfig.networks[networkName]) {
        resolvedConfig.networks[networkName] = Object.assign(
          {},
          localNetworksConfig.defaultConfig,
          localNetworkConfig
        )
      }
    })
  })
}

export function readLocalNetworksConfig(userConfig: DeepReadonly<BuidlerConfig>): LocalNetworksConfig {
  const localNetworksConfigPath = parseLocalNetworksConfigPath(userConfig)
  const localNetworksConfig = localNetworksConfigPath ? require(localNetworksConfigPath) : {}

  if (!localNetworksConfig.networks) localNetworksConfig.networks = []
  if (!localNetworksConfig.defaultConfig) localNetworksConfig.defaultConfig = {}

  return localNetworksConfig
}

export function parseLocalNetworksConfigPath(userConfig: DeepReadonly<BuidlerConfig>): string | undefined {
  const localNetworksConfigPath = userConfig.localNetworksConfig
  if (typeof localNetworksConfigPath === 'string' && fs.existsSync(localNetworksConfigPath)) {
    return localNetworksConfigPath
  }

  const defaultLocalNetworksConfigPath = getDefaultLocalNetworksConfigPath()
  return fs.existsSync(defaultLocalNetworksConfigPath) ? defaultLocalNetworksConfigPath : undefined
}

export function getDefaultLocalNetworksConfigPath() {
  return path.join(getLocalConfigDir(), BUIDLER_NETWORK_CONFIG_FILE)
}

export function getLocalConfigDir() {
  return path.join(homedir(), BUIDLER_CONFIG_DIR)
}
