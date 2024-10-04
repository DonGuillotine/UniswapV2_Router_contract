require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    hardhat: {
      forking: {
        url: process.env.LISK_SEPOLIA_RPC_URL,
      },
    },
  },
  lockGasLimit: 200000000000,
  gasPrice: 10000000000,
};
