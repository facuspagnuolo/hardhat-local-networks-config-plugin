import 'hardhat/types'

declare module 'hardhat/types' {
  export interface HardhatUserConfig {
    localNetworksConfig?: string
  }
}
