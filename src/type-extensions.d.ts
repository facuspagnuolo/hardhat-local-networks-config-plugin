import '@nomiclabs/buidler/types'

declare module '@nomiclabs/buidler/types' {
  export interface BuidlerConfig {
    localNetworksConfig?: string
  }
}
