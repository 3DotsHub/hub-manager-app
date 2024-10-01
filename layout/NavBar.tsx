import Link from 'next/link';
import NavElementTree from './NavElementTree';
import { Dispatch, SetStateAction } from 'react';

interface Props {
	isOpen: boolean;
	setState: Dispatch<SetStateAction<boolean>>;
}

export default function NavBar({ isOpen, setState }: Props) {
	return (
		<div className="fixed top-0 left-0 bottom-0 z-10 md:backdrop-blur-sm md:bg-navbar-primary md:bg-opacity-30 overflow-y-scroll">
			<header className="flex items-top px-4 sm:gap-x-4 relative h-full w-[18rem] overflow-y-auto">
				<div className="relative w-full pt-8 ">
					<ul className="flex-col hidden flex-1 mr-1 gap-2 md:flex lg:gap-[2rem] scroll-auto ">
						<Link className="ml-3" href={'/'}>
							<picture>
								<img className="-my-5 rounded-3xl" src="/3dotshub.png" alt="Logo" width={80} />
							</picture>
						</Link>
						<NavElementTree />
						<div className="h-10 w-full"></div>
					</ul>
					<aside className="flex w-10 h-10 :hidden">
						<div className="flex items-center md:block">
							<label className="absolute z-20 cursor-pointer px-3 py-6 right-0 md:right-4" htmlFor="ss-mobile-menu">
								<input className="peer hidden" type="checkbox" id="ss-mobile-menu" />

								<div className="hidden peer-checked:block">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
									</svg>
								</div>
								<div
									className={`fixed inset-0 h-screen w-full bg-slate-200/50 backdrop-blur-sm ${
										isOpen ? 'block' : 'hidden'
									}`}
									onClick={() => setState(false)}
								></div>
								<div
									className={`fixed top-0 right-0 h-screen w-64 overflow-y-auto overscroll-y-auto transition-transform duration-300 ${
										isOpen ? 'translate-x-0' : 'translate-x-full'
									}`}
								>
									<div className="min-h-full w-full bg-navbar-primary bg-opacity-50 backdrop-blur px-6 pt-12 shadow-xl relative">
										<button className="absolute top-4 right-4" onClick={() => setState(false)}>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
												className="w-6 h-6"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M6 18L18 6M6 6l12 12"
												/>
											</svg>
										</button>
										<menu className="mt-8 pb-8 flex flex-col gap-8 text-heading">
											<NavElementTree />
										</menu>
									</div>
								</div>
							</label>
						</div>
					</aside>
				</div>
			</header>
		</div>
	);
}
