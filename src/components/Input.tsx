import React from 'react';

interface InputProps {
	type: string;
	placeholder?: string;
	value: string;
	className?: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
	type,
	placeholder,
	value,
	className,
	onChange,
}: InputProps) => {
	return (
		<input
			type={type}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
			className={className}
		/>
	);
};

export default Input;
