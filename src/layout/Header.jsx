import Nav from '@/components/Nav';
import banner from '../assets/images/header/heeader_banner.png';

import GlobalSearch from '@/components/GlobalSearch';

function Header() {
	return (
		<>
			<header className="mx-auto max-w-[1920px]">
				<img src={banner} className="w-[100%]" />
				<GlobalSearch />
				<Nav />
			</header>
		</>
	);
}

export default Header;
