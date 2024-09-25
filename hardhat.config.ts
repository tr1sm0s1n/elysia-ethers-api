import { HardhatUserConfig } from 'hardhat/config'
import '@nomicfoundation/hardhat-toolbox'

const config: HardhatUserConfig = {
	solidity: '0.8.27',
	networks: {
		local: {
			url: 'http://127.0.0.1:8545',
		},
	},
	defaultNetwork: 'local',
}

export default config