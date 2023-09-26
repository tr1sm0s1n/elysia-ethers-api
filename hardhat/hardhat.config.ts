import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  defaultNetwork: "local",
  solidity: "0.8.20",
  networks: {
    local: {
      url: "http://127.0.0.1:8545",
    },
  },
  paths: {
    artifacts: "../src",
  },
};

export default config;
