import Card from '@/components/Card';
import { ResponsePortfolio } from '@/mock/ResponsePortfolio';
import { useState } from 'react';
import Image from 'next/image';

export default function SafeguardDescription() {
	return (
		<Card>
			<div className="px-2">
				<span className="font-semibold">Safeguard your assets</span> in a separated subaccount under the custodian of Deribit. This
				secure approach ensures enhanced protection and management of your funds while maintaining the reliability of a trusted
				custodian.{' '}
				<a href="https://www.deribit.com/kb/custody-options" target="_blank" className="underline cursor-pointer">
					Learn more about the custody of Deribit
				</a>
			</div>

			<div className="relative w-full h-10 max-md:h-16">
				<div className="absolute bottom-0 right-2 rounded-lg">
					<a href="https://www.deribit.com/kb/about-us" target="_blank" className="underline cursor-pointer">
						<Image
							className="rounded-lg opacity-90"
							src="/deribit.png"
							width={100}
							height={100}
							alt="Picture of the author"
						></Image>
					</a>
				</div>
			</div>
		</Card>
	);
}
