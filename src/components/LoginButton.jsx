import {node, oneOf, bool} from 'prop-types';

export function LoginButton({type = 'button', children, ...restProps}) {
	return (
		<>
			<button type={type} {...restProps} className="h-[100px] w-[190px] bg-[#000] text-[#fff]">
				{children}
			</button>
		</>
	);
}

LoginButton.propTypes = {
	secondary: bool,
	type: oneOf(['submit', 'reset', 'button']),
	children: node.isRequired,
};

/* -------------------------------------------------------------------------- */

// <LoginButton.Group>
//   <LoginButton>가입</LoginButton>
//   <LoginButton secondary>취소</LoginButton>
// </LoginButton.Group>
LoginButton.Group = function ButtonGroup({children}) {
	return <div className="mt-5 flex gap-2">{children}</div>;
};

LoginButton.Group.propTypes = {
	children: node,
};
