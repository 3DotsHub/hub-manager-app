import SafeguardDescription from '@/components/SafeguardPage/Description';
import SafeguardPortfolioBalance from '@/components/SafeguardPage/PortfolioBalance';

export default function FinanceToolsSafeguardPage() {
	return (
		<div className="grid gap-5 max-md:gap-8">
			<SafeguardDescription />
			<SafeguardPortfolioBalance />
		</div>
	);
}
