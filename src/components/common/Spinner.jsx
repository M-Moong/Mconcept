function Spinner({size = 200, message = '로딩 중...', colors = ['#0a0a0a', '#28292f', '#41424b', '#61626a', '#80818b'], ...restProps}) {
	return (
		<div className="flex items-center justify-center w-full m-auto">
			<svg width={size} height={size} display="block" preserveAspectRatio="xMidYMid" viewBox="0 0 100 100" {...restProps}>
				<title>{message}</title>
				<rect x="15" y="30" width="10" height="40" fill="#0a0a0a">
					<animate attributeName="opacity" dur="1s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" values="1;0.2;1" begin="-0.6"></animate>
				</rect>
				<rect x="35" y="30" width="10" height="40" fill="#28292f">
					<animate attributeName="opacity" dur="1s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" values="1;0.2;1" begin="-0.4"></animate>
				</rect>
				<rect x="55" y="30" width="10" height="40" fill="#41424b">
					<animate attributeName="opacity" dur="1s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" values="1;0.2;1" begin="-0.2"></animate>
				</rect>
				<rect x="75" y="30" width="10" height="40" fill="#61626a">
					<animate attributeName="opacity" dur="1s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" values="1;0.2;1" begin="-1"></animate>
				</rect>
			</svg>
		</div>
	);
}

export default Spinner;
