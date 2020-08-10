import React from 'react';

import { Container, Border } from './styles';

export default function RoundAvatar({ avatar }) {
	return (
		<Container>
            <Border>
		        <img src={avatar} alt="logo" />
            </Border>
		</Container>
	);
}