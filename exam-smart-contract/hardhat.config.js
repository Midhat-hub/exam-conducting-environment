require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
mmodule.exports = {
  solidity: "0.8.0",
  networks: {
    ganache: {
      url: "http://127.0.0.1:7545",  // Ganache RPC URL
      accounts: ["0x9e45398f85a5e00f4203991dedb886cf024ad8eed04acb4e8c9c0413ff00579b"],  // You’ll find this in Ganache
    },
  },
};


