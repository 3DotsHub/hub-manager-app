import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en">
			<Head />
			<body className="font-sans px-0 md:px-8 mx-auto bg-slate-200 text-slate-900">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
