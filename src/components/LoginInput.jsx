import {useId} from 'react';
import {oneOf, string} from 'prop-types';

export function LoginInput({type = 'text', name = null, label, placeholder, style, ...restProps}) {
	const id = useId();

	return (
		<div className={style}>
			<label htmlFor={id} className="inline-block w-[105px] text-left text-[14px] text-[#333]">
				{label}
			</label>
			<input
				{...restProps}
				placeholder={placeholder}
				type={type}
				id={id}
				name={name}
				className="h-[40px] w-[420px] rounded-none bg-[#F2F2F2] py-[1px] pl-[20px] pr-[2px] text-[14px] focus:outline-none"
				required
			/>
		</div>
	);
}

LoginInput.propTypes = {
	type: oneOf(['text', 'password', 'number', 'email', 'search']),
	name: string.isRequired,
	label: string.isRequired,
	placeholder: string,
	style: string,
};
