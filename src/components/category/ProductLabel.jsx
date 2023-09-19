import React, {useState} from 'react';

function Label({isVisible, label}) {
	if (!isVisible) return null;

	return <label className="sr-only">{label}</label>;
}

function VisibilityButton({isVisible, label, backgroundColor, borderColor, color}) {
	return (
		<button
			className="mt-1 p-[2px] px-1 text-center text-xs font-medium"
			role="label"
			aria-label={isVisible ? label : 'hide'}
			style={{backgroundColor, border: `1px solid ${borderColor}`, color}}
			disabled
		>
			{isVisible ? label : 'hide'}
		</button>
	);
}

export function NewSeasonLabel() {
	const [isNewSeasonVisible] = useState(true);

	return (
		<div>
			<Label isVisible={isNewSeasonVisible} label="뉴시즌" />
			<VisibilityButton backgroundColor="#fa5500" color="white" isVisible={isNewSeasonVisible} label="뉴시즌" />
		</div>
	);
}

export function CelebrityLabel() {
	const [isCelebVisible] = useState(true);

	return (
		<div>
			<Label isVisible={isCelebVisible} label="셀럽착용" />
			<VisibilityButton backgroundColor="white" borderColor="grey" color="grey" isVisible={isCelebVisible} label="셀럽착용" />
		</div>
	);
}

export function CouponLabel() {
	const [isCouponvisible] = useState(true);

	return (
		<div>
			<Label isVisible={isCouponvisible} label="쿠폰" />
			<VisibilityButton backgroundColor="black" color="white" isVisible={isCouponvisible} label="쿠폰" />
		</div>
	);
}

export function OnlyLabel() {
	const [isOnlyVisible] = useState(true);

	return (
		<div>
			<Label isVisible={isOnlyVisible} label="단독판매 " />
			<VisibilityButton backgroundColor="white" borderColor="grey" color="grey" isVisible={isOnlyVisible} label="단독판매 " />
		</div>
	);
}
