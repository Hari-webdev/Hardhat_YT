require("@nomicfoundation/hardhat-toolbox");
const ALCHEMY_API_KEY = "iuCGNrBkd_eb8d-9AsFTgKs....." ;
const GOERLI_PRIVATE_KEY = "e06b.....";

module.exports = {
  solidity: "0.8.17",
  networks: {
    sepolia: {
      url:`https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts:[GOERLI_PRIVATE_KEY],
    },
  },
};
