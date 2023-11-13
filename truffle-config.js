module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "5777" 
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
}

var HDWalletProvider = require("truffle-hdwallet-provider");
const MNEMONIC = '0xe0a46e324633b3Ed90Fe0C8fc28527B5D041142C';

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "5777"
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(MNEMONIC, "https://mainnet.infura.io/v3/be28b1f5ab03452491528a99c77f8dbf")
      },
      network_id: 1,
      gas: 4000000      //make sure this gas allocation isn't over 4M, which is the max
    }
  }
};