import {Outlet} from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import StickyScroll from './StickyScroll';

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
