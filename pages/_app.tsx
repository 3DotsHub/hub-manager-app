'use client';

import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../layout/Layout';
import Web3ModalProvider from '@/components/Web3Modal';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Web3ModalProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Web3ModalProvider>
	);
}
