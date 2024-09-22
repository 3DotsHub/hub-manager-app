import NavElement from './NavElement';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faArrowUpShortWide,
	faBuilding,
	faCampground,
	faCoins,
	faComputer,
	faDatabase,
	faFileInvoice,
	faFingerprint,
	faHandHoldingHeart,
	faHandshake,
	faHandsHoldingCircle,
	faHouse,
	faLaptopCode,
	faLightbulb,
	faMoneyBill1Wave,
	faPeopleGroup,
	faPiggyBank,
	faRankingStar,
	faScrewdriverWrench,
	faSeedling,
	faServer,
	faSliders,
	faUnlockKeyhole,
	faVault,
} from '@fortawesome/free-solid-svg-icons';

export type NavBarElement = {
	name: string;
	to?: string;
	icon: JSX.Element;
};

export type NavBarTree = NavBarElement & {
	childs?: NavBarElement[];
};

export const NavTree: NavBarTree[] = [
	{
		name: 'Home',
		to: '/home',
		icon: <FontAwesomeIcon icon={faHouse} className="cursor-pointer" size={'xl'} />,
		childs: [
			{
				name: 'Purpose',
				to: 'home/purpose',
				icon: <FontAwesomeIcon icon={faFingerprint} className="cursor-pointer" />,
			},
			{
				name: 'Goals',
				to: 'home/goals',
				icon: <FontAwesomeIcon icon={faLightbulb} className="cursor-pointer" />,
			},
			{
				name: 'Membership',
				to: 'home/membership',
				icon: <FontAwesomeIcon icon={faUnlockKeyhole} className="cursor-pointer" />,
			},
		],
	},
	{
		name: 'Server Tools',
		to: 'servertools',
		icon: <FontAwesomeIcon icon={faComputer} className="cursor-pointer" size={'xl'} />,
		childs: [
			{
				name: 'Hosting',
				to: 'server/hosting',
				icon: <FontAwesomeIcon icon={faServer} className="cursor-pointer" />,
			},
			{
				name: 'Storage',
				to: 'server/storage',
				icon: <FontAwesomeIcon icon={faDatabase} className="cursor-pointer" />,
			},
			{
				name: 'Deployment',
				to: 'server/deployment',
				icon: <FontAwesomeIcon icon={faLaptopCode} className="cursor-pointer" />,
			},
		],
	},
	{
		name: 'Finance Tools',
		to: 'financetools',
		icon: <FontAwesomeIcon icon={faCoins} className="cursor-pointer" size={'xl'} />,
		childs: [
			{
				name: 'Safeguard',
				to: 'finance/safeguard',
				icon: <FontAwesomeIcon icon={faVault} className="cursor-pointer" />,
			},
			{
				name: 'Lend',
				to: 'finance/lend',
				icon: <FontAwesomeIcon icon={faPiggyBank} className="cursor-pointer" />,
			},
			{
				name: 'Borrow',
				to: 'finance/borrow',
				icon: <FontAwesomeIcon icon={faMoneyBill1Wave} className="cursor-pointer" />,
			},
			{
				name: 'Invoice',
				to: 'finance/invoice',
				icon: <FontAwesomeIcon icon={faFileInvoice} className="cursor-pointer" />,
			},
			{
				name: 'Invest',
				to: 'finance/invest',
				icon: <FontAwesomeIcon icon={faSeedling} className="cursor-pointer" />,
			},
		],
	},
	{
		name: 'Cooperative',
		to: 'cooperative',
		icon: <FontAwesomeIcon icon={faPeopleGroup} className="cursor-pointer" size={'xl'} />,
		childs: [
			{
				name: 'Governance',
				to: 'cooperative/governance',
				icon: <FontAwesomeIcon icon={faRankingStar} className="cursor-pointer" />,
			},
			{
				name: 'Housing',
				to: 'cooperative/housing',
				icon: <FontAwesomeIcon icon={faCampground} className="cursor-pointer" />,
			},
			{
				name: 'Contribute',
				to: 'cooperative/contribute',
				icon: <FontAwesomeIcon icon={faHandHoldingHeart} className="cursor-pointer" />,
			},
			{
				name: 'Research Hub',
				to: 'cooperative/deployment',
				icon: <FontAwesomeIcon icon={faLaptopCode} className="cursor-pointer" />,
			},
		],
	},
	{
		name: 'Partners',
		to: '/partners',
		icon: <FontAwesomeIcon icon={faHandshake} className="cursor-pointer" size={'xl'} />,
		childs: [
			{
				name: '3Dots Inc.',
				to: 'partner/3dotsinc',
				icon: <FontAwesomeIcon icon={faBuilding} className="cursor-pointer" />,
			},
			{
				name: '3Dots Capital OU',
				to: 'partner/3dotscapital',
				icon: <FontAwesomeIcon icon={faBuilding} className="cursor-pointer" />,
			},
			{
				name: 'Collectiva Espania',
				to: 'partner/collectivaespania',
				icon: <FontAwesomeIcon icon={faPeopleGroup} className="cursor-pointer" />,
			},
		],
	},
];

export type NavElementTreeProps = {
	tree?: NavBarTree[];
};

export default function NavElementTree({ tree }: NavElementTreeProps) {
	if (tree == undefined) tree = NavTree;
	if (tree.length == 0) return null;

	return (
		<>
			{tree.map((item) => (
				<li className="flex flex-col" key={item.name}>
					<NavElement item={item} />
				</li>
			))}
		</>
	);
}
