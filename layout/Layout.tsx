import Head from 'next/head';
import { ReactNode } from 'react';
import Footer from './Footer';
import MenuBar from './MenuBar';

type LayoutProps = {
	children: NonNullable<ReactNode>;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<Head>
				<title>3DotsHub - Home</title>
			</Head>

			<MenuBar />

			<div className="h-main pt-32 ml-0 md:ml-[18rem]">
				<main className="block min-h-content px-4 md:px-0">{children}</main>
				<Footer />
			</div>
		</>
	);
};

export default Layout;
