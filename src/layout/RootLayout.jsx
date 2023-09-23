import StickyScroll from '@/components/mainPage/StickyScroll';
import {Outlet} from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

function RootLayout() {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
			<StickyScroll />
		</>
	);
}

export default RootLayout;
