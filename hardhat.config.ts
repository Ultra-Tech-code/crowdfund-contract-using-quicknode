//require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
import "@nomiclabs/hardhat-ethers";
require("dotenv").config({ path: ".env" });

const INFURA_MAINNET_API_URL = process.env.INFURA_MAINNET_API_KEY_URL;

module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: process.env.QUICKNODE_HTTP_URL,
      accounts: [process.env.ACCOUNT_PRIVATE_KEY],
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  }
};