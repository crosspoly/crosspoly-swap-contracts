const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');

const privateKey = fs.readFileSync('./.private_key', {encoding: 'utf8', flag: 'r' });

// Define networks.
const eth_mainnet_rpc = 'https://mainnet.infura.io/v3/62f3d65b3bc340fa7bea12eaad455298';
const network_eth_mainnet = {
  provider: () => new HDWalletProvider(privateKey, eth_mainnet_rpc),
  network_id: 1,
  gas: 5500000,
  gasPrice: 75000000000, // 75 Gwei
  confirmations: 0,
  timeoutBlocks: 200,
  skipDryRun: false
};

const eth_ropsten_rpc = 'https://ropsten.infura.io/v3/62f3d65b3bc340fa7bea12eaad455298';
const network_eth_ropsten = {
    provider: () => new HDWalletProvider(privateKey, eth_ropsten_rpc),
    network_id: 3,
    gas: 3000000,
    gasPrice: 40000000000, // 40 Gwei
    confirmations: 0,
    timeoutBlocks: 200,
    skipDryRun: false
};

const bsc_mainnet_rpc = 'https://bsc-dataseed1.binance.org';
const network_bsc_mainnet = {
  provider: () => new HDWalletProvider(privateKey, bsc_mainnet_rpc),
  network_id: 56,
  gas: 5500000,
  confirmations: 0,
  timeoutBlocks: 200,
  skipDryRun: false
};

const bsc_testnet_rpc = 'https://data-seed-prebsc-1-s1.binance.org:8545';
const network_bsc_testnet = {
  provider: () => new HDWalletProvider(privateKey, bsc_testnet_rpc),
  network_id: 97,
  gas: 5500000,
  confirmations: 0,
  timeoutBlocks: 200,
  skipDryRun: false
};

const heco_mainnet_rpc = 'https://http-mainnet.hecochain.com';
const network_heco_mainnet = {
  provider: () => new HDWalletProvider(privateKey, heco_mainnet_rpc),
  network_id: 128,
  gas: 5500000,
  confirmations: 0,
  timeoutBlocks: 200,
  skipDryRun: false
};

const heco_testnet_rpc = 'https://http-testnet.hecochain.com';
const network_heco_testnet = {
  provider: () => new HDWalletProvider(privateKey, heco_testnet_rpc),
  network_id: 256,
  gas: 5500000,
  confirmations: 1,
  timeoutBlocks: 200,
  skipDryRun: false
};

const network_development = {
  host: "127.0.0.1",
  port: 8545,
  network_id: "*",
 };

module.exports = {
  networks: {
    eth_mainnet_cptoken: network_eth_mainnet,
    eth_mainnet_cpstaking: network_eth_mainnet,
    heco_mainnet_cptoken: network_heco_mainnet,
    bsc_mainnet_cptoken: network_bsc_mainnet,

    eth_ropsten_cptoken: network_eth_ropsten,
    eth_ropsten_cpstaking: network_eth_ropsten,
    heco_testnet_cptoken: network_heco_testnet,
    bsc_testnet_cptoken: network_bsc_testnet,

    development: network_development
  },

  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.6.12",
      settings: {
       optimizer: {
         enabled: true,
         runs: 200
       },
       evmVersion: "istanbul"
      }
    }
  },

  db: {
    enabled: false
  }
};
