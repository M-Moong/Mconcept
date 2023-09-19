import {Route, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';

// 컴포넌트 경로
import Empty from '@/layout/Empty';
import Home from '@/pages/Home';
import Login from './pages/Login';
// import Detail from '@/views/Detail';
// 컴포넌트 경로

const router = createBrowserRouter(
	createRoutesFromElements(
		// 경로 설정 하는 부분
		<Route path="/" element={<Empty />}>
			<Route index element={<Home />} />
			{/* <Route path="/detail/:id" element={<Detail />} /> */}
			<Route path="/login" element={<Login />} />
		</Route>,
	),
);

export default router;
