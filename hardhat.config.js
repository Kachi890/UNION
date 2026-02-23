require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan"); // optional

const RPC_URL = process.env.RPC_URL || "";
const PRIVATE_KEY = process.env.PRIVATE_KEY || "";
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || ""; // optional

module.exports = {
  solidity: "0.8.19",
  networks: {
    base: {
      url: RPC_URL,
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
      // Base mainnet chainId = 8453. Use testnet chainId if deploying to testnet.
      chainId: 8453
    }
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY
  }
};
