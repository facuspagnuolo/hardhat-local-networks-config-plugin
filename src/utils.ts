import path from 'path'
import untildify from 'untildify'
import { HardhatUserConfig } from 'hardhat/types'

export function parseLocalNetworksConfigPath(
  userConfig: HardhatUserConfig,
  projectRootPath: string
): string | undefined {
  const configuredLocalNetworksConfigPath = userConfig.localNetworksConfig

  if (typeof configuredLocalNetworksConfigPath === 'string' && configuredLocalNetworksConfigPath) {
    const resolvedLocalNetworksConfigPath = untildify(configuredLocalNetworksConfigPath)

      const localNetworksConfigPath = path.isAbsolute(resolvedLocalNetworksConfigPath)
      ? resolvedLocalNetworksConfigPath
      : path.resolve(projectRootPath, resolvedLocalNetworksConfigPath)

    return localNetworksConfigPath
  }
}
