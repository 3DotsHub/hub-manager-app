'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavBarTree } from './NavElementTree';

export type NavElementProps = {
	item: NavBarTree;
	external?: boolean;
};

export default function NavElement({ item, external }: NavElementProps) {
	const pathname = usePathname();
	// const active = item.to ? pathname.includes(item.to) : false;
	const active = item.to === pathname;
	const childs = item.childs || [];
	return (
		<div className="rounded-2xl p-3 shadow-lg bg-gray-100 bg-opacity-30">
			<Link className={`btn btn-nav`} href={item.to ?? ''} target={external ? '_blank' : '_self'}>
				<div className="flex flex-row items-center">
					<div className="mx-5 w-[2rem] flex items-center justify-center">{item.icon}</div>
					<span className={active ? 'text-navbar-active font-semibold' : 'font-semibold'}>{item.name}</span>
				</div>
			</Link>

			{childs.length > 0 ? (
				<>
					<div className="mt-2 h-[2px] rounded bg-gray-800 bg-opacity-30"></div>

					<div className="flex flex-col mt-5 gap-2">
						{childs.length > 0
							? childs.map((c) => (
									<Link
										className={`btn btn-nav`}
										key={item.name + c.name}
										href={c.to ?? ''}
										target={external ? '_blank' : '_self'}
									>
										<div className="flex">
											<div className="mx-5 w-[2rem] flex items-center justify-center">{c.icon}</div>
											<div className={c.to && pathname.includes(c.to) ? 'text-navbar-active font-semibold' : ''}>
												{c.name}
											</div>
										</div>
									</Link>
							  ))
							: null}
					</div>
				</>
			) : (
				<></>
			)}
		</div>
	);
}
