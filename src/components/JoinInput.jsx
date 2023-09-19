import {useId} from 'react';
import {oneOf, string} from 'prop-types';

export function JoinInput({type = 'text', name = null, label, placeholder, style, maxLength, incorrectMessage, ...restProps}) {
	const id = useId();

	return (
		<tr>
			<th className="h-[68px] border-t-[1px] border-[#d9d9d9] pl-[43px] text-left text-[#333]">
				<label htmlFor={id}>{label}</label>
				<span className="pt-[2px] text-[#ff1414]">*</span>
			</th>
			<td className="break-words border-t-[1px] border-solid border-[#d9d9d9] bg-clip-padding px-[19px] text-[14px] text-[#000]">
				<div className="va_m m-[0] inline-block align-middle">
					<input
						{...restProps}
						className="float-left h-[40px] w-[400px] border-[1px] border-solid border-[#f2f2f2] bg-[#f2f2f2] pl-[20px] align-middle text-[14px] leading-[38px] outline-none"
						type={type}
						name={name}
						id={id}
						maxLength={maxLength}
						placeholder={placeholder}
					/>
				</div>
				<div className="incorrect inline-block  before:mb-[0] before:ml-[16px] before:mr-[4px] before:mt-[1px] before:inline-block before:h-[11px] before:w-[11px] before:bg-[url('../assets/images/login/icon_incorrect.svg')] before:bg-center before:bg-no-repeat before:align-text-top before:content-['']">
					<span className="text-left text-[12px] text-[#fa5500]">{incorrectMessage}</span>
				</div>
			</td>
		</tr>
	);
}

JoinInput.propTypes = {
	type: oneOf(['text', 'password', 'number', 'email', 'search']),
	name: string.isRequired,
	label: string.isRequired,
	placeholder: string,
	style: string,
};
