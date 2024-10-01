import { useState } from 'react';
import NavBar from './NavBar';
import WalletConnect from '@/components/WalletConnect';

export default function MenuBar() {
	const [isNavBarOpen, setIsNavBarOpen] = useState(false);

	return (
		<>
			<div className="fixed top-0 left-0 right-0 z-10 m-3 md:m-5 md:ml-[calc(18rem+1.25rem)]">
				<div className="bg-menubar-primary bg-opacity-90 rounded-3xl shadow-lg p-5 flex justify-end items-center">
					<div className="flex items-center space-x-4">
						<WalletConnect />

						<div className="md:hidden">
							<button onClick={() => setIsNavBarOpen(!isNavBarOpen)} className="cursor-pointer">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									className="mt-1 w-6 h-6"
								>
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>
			<NavBar isOpen={isNavBarOpen} setState={setIsNavBarOpen} />
		</>
	);
}
