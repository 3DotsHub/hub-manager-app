import { polygon } from 'viem/chains';
import { Address, zeroAddress } from 'viem';

export interface ChainContracts {
	membership: Address;

	// accept any optional key
	[key: string]: Address | undefined;
}

export const ADDRESS: Record<number, ChainContracts> = {
	[polygon.id]: {
		membership: zeroAddress,
	},
};
