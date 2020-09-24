[![buidler](https://buidler.dev/buidler-plugin-badge.svg?1)](https://buidler.dev)
# buidler-local-networks-config-plugin

Allow loading network configs for Buidler projects in home file 

## What

This plugin allows you to specify a local configuration file to populate the Buidler's networks config.
This means users can keep critical information stored locally without risking it to the project's devs or users.
For example, you can keep your providers keys or private keys in a secured directory without exposing them.

## Installation

Install dependency from NPM:

```bash
npm install buidler-local-networks-config-plugin @nomiclabs/buidler
```

And add the following statement to your `buidler.config.js`:

```js
usePlugin('buidler-local-networks-config-plugin')
```

## Required plugins

This plugin does not require any extra plugin.

## Tasks

This plugin creates no additional tasks.

## Environment extensions

This plugin does not perform any environment extension.

## Configuration

This plugin extends the `BuidlerConfig` object with an optional `localNetworksConfig` field.

This is an example of how to set it:

```js
module.exports = {
  localNetworksConfig: '~/.buidler/networks.ts'
}
```

## Usage

The local configuration file should support the following interface, any other field will be simply ignored:

```ts
export interface LocalNetworksConfig {
  networks: Networks
  defaultConfig: NetworkConfig
}
```

Where `Networks` and `NetworkConfig` are based types defined by Buidler.

In case there is a conflict between any of the local network configs, the default one, or the ones defined in your
project, the following list of priorities will be enforced:

1. Project network specific configuration
2. Local network specific configuration
3. Local default network configuration

## TypeScript support

You need to add this to your `tsconfig.json`'s `files` array: 
`"node_modules/buidler-local-networks-config-plugin/src/type-extensions.d.ts"`
