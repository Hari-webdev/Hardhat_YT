require("@nomicfoundation/hardhat-toolbox");
const ALCHEMY_API_KEY = "iuCGNrBkd_eb8d-9AsFTgKs57z6ZJ02R" ;
const GOERLI_PRIVATE_KEY = "e06b8bac3c1403423806588142ce1de02987b9a4c94c53bcda0fa8802e88c19a";

module.exports = {
  solidity: "0.8.17",
  networks: {
    sepolia: {
      url:`https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts:[GOERLI_PRIVATE_KEY],
    },
  },
};
