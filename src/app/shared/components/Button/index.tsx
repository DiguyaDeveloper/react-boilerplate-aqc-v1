import React from 'react';
import { IButtonProps } from './interface';
import { ButtonStyle } from './styles';

export const Button = ({
	children,
	onClick,
	variant,
	type,
	loading = false,
}: IButtonProps) => (
	<ButtonStyle
		onClick={onClick}
		disabled={loading}
		type={type}
		variant={variant}
		data-test="button-square">
	</ButtonStyle>
);
