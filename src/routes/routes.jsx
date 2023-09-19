import {Route, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import Header from '@/layout/Header';
import Login from '@/pages/Login';
import Mainpage from '@/pages/Mainpage';
import Join from '@/pages/Join';
import RootLayout from '@/layout/RootLayout';
import Category from '@/pages/Category';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<RootLayout />}>
			<Route index element={<Mainpage />} />
			<Route path="join" element={<Join />} />
			<Route path="login" element={<Login />} />
			<Route path="Category" element={<Category />} />
		</Route>,
	),
);

export default router;
