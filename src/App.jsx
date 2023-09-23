import Spinner from '@/components/common/Spinner';
import AuthProvider from '@/contexts/Auth';
import router from '@/routes/routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';

// 쿼리 클라이언트 객체 생성
const queryClient = new QueryClient({
	// 모든 쿼리에 사용되는 기본 옵션
	defaultOptions: {
		queries: {
			retry: 5,
			staleTime: 1000 * 60 * 4, // (기본 값: 0)
			cacheTime: 1000 * 60 * 5, // (기본 값: 5분)
		},
	},
});

function App() {
	return (
		<>
			<HelmetProvider>
				<AuthProvider>
					<QueryClientProvider client={queryClient}>
						<div className="App">
							<Suspense fallback={<Spinner size={150} message="페이지 로딩 중..." />}>
								<RouterProvider router={router} />
							</Suspense>
						</div>
						<ReactQueryDevtools />
					</QueryClientProvider>
				</AuthProvider>
				<Toaster />
			</HelmetProvider>
		</>
	);
}

export default App;
