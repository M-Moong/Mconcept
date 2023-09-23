/**
 *  ProductFilter component
 * */

export function ProductFilterBrand({brandName, onFilter}) {
	return (
		<label>
			<input
				type="checkbox"
				onChange={(e) => {
					onFilter?.(brandName);
				}}
			/>
			<span className="ml-1 text-base font-medium text-primary">{brandName}</span>
		</label>
	);
}

export function ProductFilterPrice({price, onFilter}) {
	return (
		<label>
			<input
				type="checkbox"
				onChange={(e) => {
					onFilter?.(price);
				}}
			/>
			<span className="ml-1 text-base font-medium text-primary">{price}</span>
		</label>
	);
}

export function ProductFilterBenefit({benefit, onFilter}) {
	return (
		<label>
			<input
				type="checkbox"
				onChange={(e) => {
					onFilter?.(benefit);
				}}
			/>
			<span className="ml-1 text-base font-medium text-primary">{benefit}</span>
		</label>
	);
}

export function ProductFilterColor({colorName, onFilter}) {
	return (
		<label>
			<input
				type="checkbox"
				onChange={(e) => {
					onFilter?.(colorName);
				}}
			/>
			<span className="ml-1 text-base font-medium text-primary">{colorName}</span>
		</label>
	);
}

export function ProductFilterDiscount({discount, onFilter}) {
	return (
		<label>
			<input
				type="checkbox"
				onChange={(e) => {
					onFilter?.(discount);
				}}
			/>
			<span className="ml-1 text-base font-medium text-primary">{discount}</span>
		</label>
	);
}
