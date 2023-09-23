import {node, oneOf, bool} from 'prop-types';

export function JoinButton({type = 'button', children, style, ...restProps}) {
	return (
		<>
			<button
				{...restProps}
				className={`${style} mx-[8px] inline-block h-[50px] min-w-[180px] border-[1px] border-solid border-[rgb(51,51,51)]  px-[20px] text-center text-[14px] leading-[48px]`}
				type={type}
			>
				{children}
			</button>
		</>
	);
}

JoinButton.propTypes = {
	secondary: bool,
	type: oneOf(['submit', 'reset', 'button']),
	children: node.isRequired,
};

JoinButton.Group = function ButtonGroup({children}) {
	return <div className="mt-5 flex gap-2">{children}</div>;
};

JoinButton.Group.propTypes = {
	children: node,
};
