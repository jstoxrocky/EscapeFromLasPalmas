import * as dotenv from 'dotenv';

import { HardhatUserConfig, task } from 'hardhat/config';
import '@nomiclabs/hardhat-etherscan';
import '@nomiclabs/hardhat-waffle';
import '@typechain/hardhat';
import 'hardhat-gas-reporter';
import 'solidity-coverage';

dotenv.config();

const privateKey = process.env.EFLP_PRIVATE_KEY ? process.env.EFLP_PRIVATE_KEY : "";

const config: HardhatUserConfig = {
  solidity: "0.8.4",
  networks: {
    goerli: {
      url: process.env.EFLP_GOERLI_URL,
      accounts: [privateKey]
    },
    mainnet: {
      url: process.env.EFLP_MAINNET_URL,
      accounts: [privateKey]
    }
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};

export default config;
