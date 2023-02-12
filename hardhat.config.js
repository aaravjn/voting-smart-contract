require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy")
require("dotenv").config()
require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.17",
  namedAccounts: {
    deployer: {
      default: 0,
    },
    adrs1: {
      default: 1,
    },
    adrs2: {
      default: 2,
    }
  },
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 31337,
      blockConfirmations: 6,
    },
    goerli: {
      url: process.env.GOERLI_RPC_URL,
      accounts: [process.env.PRIVATE_KEY_DEPLOYER],
      chainId: 5,
      blockConfirmations: 6,
    },
  },
  mocha : {
    timeout: 400000
  },
  etherscan : {
    apiKey: {
      goerli: process.env.ETHERSCAN_API_KEY,
    }
  },
};