import {Route, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import {lazy} from 'react';
const Mainpage = lazy(() => import('@/pages/Mainpage'));
const RootLayout = lazy(() => import('@/layout/RootLayout'));
const CategoryBrand = lazy(() => import('@/pages/CategoryBrand'));
const CategoryColor = lazy(() => import('@/pages/CategoryColor'));
const CategoryOuter = lazy(() => import('@/pages/CategoryOuter'));
const CategoryJacket = lazy(() => import('@/pages/CategoryJacket'));
const CategoryJumper = lazy(() => import('@/pages/CategoryJumper'));
const CategoryPadding = lazy(() => import('@/pages/CategoryPadding'));
const CategoryCoat = lazy(() => import('@/pages/CategoryCoat'));
const CategoryPants = lazy(() => import('@/pages/CategoryPants'));
const CategoryTshirts = lazy(() => import('@/pages/CategoryTshirts'));
const CategoryNeat = lazy(() => import('@/pages/CategoryNeat'));
const Details = lazy(() => import('@/pages/Details'));
const Join = lazy(() => import('@/pages/Join'));
const JoinComplete = lazy(() => import('@/pages/JoinComplete'));
const Login = lazy(() => import('@/pages/Login'));

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<RootLayout />}>
			<Route index element={<Mainpage />} />
			<Route path="join" element={<Join />} />
			<Route path="join/joinComplete" element={<JoinComplete />} />
			<Route path="login" element={<Login />} />
			<Route path="products/:id" element={<Details />} />
			<Route path="categoryBrand" element={<CategoryBrand />} />
			<Route path="categoryColor" element={<CategoryColor />} />
			<Route path="categoryBrand/outer" element={<CategoryOuter />} />
			<Route path="jacket" element={<CategoryJacket />} />
			<Route path="jumper" element={<CategoryJumper />} />
			<Route path="padding" element={<CategoryPadding />} />
			<Route path="coat" element={<CategoryCoat />} />
			<Route path="pants" element={<CategoryPants />} />
			<Route path="tshirts" element={<CategoryTshirts />} />
			<Route path="neat" element={<CategoryNeat />} />
		</Route>,
	),
);

export default router;
