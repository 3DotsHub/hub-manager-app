export default function Card({ children }: { children?: React.ReactElement | React.ReactElement[] }) {
	return <div className="bg-slate-300 rounded-3xl shadow-lg p-5 max-sm:mx-2">{children}</div>;
}
