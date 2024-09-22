'use client';

import { ApolloClient, InMemoryCache } from '@apollo/client';
import { cookieStorage, createConfig, createStorage, http } from '@wagmi/core';
import { injected, coinbaseWallet, walletConnect } from '@wagmi/connectors';
import { polygon, Chain } from '@wagmi/core/chains';
import axios from 'axios';

export type ConfigEnv = { landing: string; app: string; api: string; ponder: string; rpc: string; wagmiId: string; chain: Chain };

// Config
export const CONFIG: ConfigEnv = {
	landing: process.env.NEXT_PUBLIC_LANDINGPAGE_URL || 'https://3dotshub.com',
	app: process.env.NEXT_PUBLIC_APP_URL || 'https://app.3dotshub.com',
	api: process.env.NEXT_PUBLIC_API_URL || 'https://api.3dotshub.com',
	ponder: process.env.NEXT_PUBLIC_PONDER_URL || 'https://ponder.3dotshub.com',
	chain: process.env.NEXT_PUBLIC_CHAIN_NAME == 'polygon' ? polygon : polygon,
	wagmiId: process.env.NEXT_PUBLIC_WAGMI_ID || '43de2818d45251b27552b117376fdef1',
	rpc: process.env.NEXT_PUBLIC_RPC_URL || 'https://polygon-mainnet.g.alchemy.com/v2/qktPP_lEsgpcPbPyd511FZG5uZUWTFFI', // developer key
};

console.log('YOU ARE USING THIS CONFIG PROFILE:');
console.log(CONFIG);

// PONDER CLIENT
export const PONDER_CLIENT = new ApolloClient({
	uri: CONFIG.ponder,
	cache: new InMemoryCache(),
});

// API CLIENT
export const API_CLIENT = axios.create({
	baseURL: CONFIG.api,
});

// WAGMI CONFIG
export const WAGMI_CHAIN = CONFIG.chain;
export const WAGMI_METADATA = {
	name: 'Hub Manager',
	description: 'Web3 Application to interact with the hub manager',
	url: CONFIG.landing,
	icons: [],
};
export const WAGMI_CONFIG = createConfig({
	chains: [WAGMI_CHAIN],
	transports: {
		[CONFIG.chain.id]: http(CONFIG.rpc),
	},
	batch: {
		multicall: {
			wait: 200,
		},
	},
	connectors: [
		walletConnect({ projectId: CONFIG.wagmiId, metadata: WAGMI_METADATA, showQrModal: false }),
		injected({ shimDisconnect: true }),
		coinbaseWallet({
			appName: WAGMI_METADATA.name,
			appLogoUrl: WAGMI_METADATA.icons[0],
		}),
	],
	ssr: true,
	storage: createStorage({
		storage: cookieStorage,
	}),
});
