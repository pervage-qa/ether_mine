require("@nomicfoundation/hardhat-toolbox")

module.exports = {
  solidity: "0.8.17",
  networks: {
    localganache: {
      url: 'HTTP://127.0.0.1:7545',
      accounts: ["9c62763d7269e46611cb14d7e56daf6ae2665beb7e162ed4a3df592f6e7a2a20"]
    }
  }
}