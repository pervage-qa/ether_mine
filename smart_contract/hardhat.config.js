require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.17',
  networks: {
    hardhat: {
      forking: {
        url: "https://eth-mainnet.g.alchemy.com/v2/4KkbXmeQ_HsgRFY6LDDpKdLfzPuVRoIV",
        accounts: ['ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80']
      }
    }
  }
};