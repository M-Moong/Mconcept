import React from 'react';
import { Link } from 'react-router-dom';

function ProductNav() {
	return (
		<>
			<nav className="mb-6 text-xs">
				<ul className="flex flex-row">
					<Link to="/">
						<button type="button">HOME ＞ </button>
					</Link>
					<Link to="/categoryBrand">
						<button type="button">MEN</button>
					</Link>
				</ul>
			</nav>
		</>
	);
}

export default ProductNav;
