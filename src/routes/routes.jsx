import {Route, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import {lazy} from 'react';
const Mainpage = lazy(() => import('@/pages/Mainpage'));
const RootLayout = lazy(() => import('@/layout/RootLayout'));
const Category = lazy(() => import('@/pages/Category'));
const Details = lazy(() => import('@/pages/Details'));
const Join = lazy(() => import('@/pages/Join'));
const Login = lazy(() => import('@/pages/Login'));
const CategoryColor = lazy(() => import('@/pages/CategoryColor'))

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<RootLayout />}>
			<Route index element={<Mainpage />} />
			<Route path="join" element={<Join />} />
			<Route path="login" element={<Login />} />
			<Route path="products/:id" element={<Details />} />
			<Route path="category" element={<Category />} />
			<Route path="categorycolor" element={<CategoryColor />} />
		</Route>,
	),
);

export default router;
