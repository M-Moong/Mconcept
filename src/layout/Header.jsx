import Nav from '@/components/header/Nav';
import banner from '@/assets/images/header/heeader_banner.png';

import GlobalSearch from '@/components/header/GlobalSearch';

function Header() {
	return (
		<>
			<header className="mx-auto max-w-[1920px]">
				<img src={banner} alt="배너" className="h-[100%] w-[100%]" />
				<GlobalSearch />
				<Nav />
			</header>
		</>
	);
}

export default Header;
