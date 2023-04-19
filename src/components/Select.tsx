import React from 'react';

interface SelectProps {
	value: string | undefined;
	className?: string;
	onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
	children: React.ReactNode;
}

const Select = ({
	value,
	className,
	onChange,
	children,
}: SelectProps) => {
	return (
		<select value={value} onChange={onChange} className={className}>
			{children}
		</select>
	);
};

export default Select;
