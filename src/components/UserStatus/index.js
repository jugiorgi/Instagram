import React from 'react';

import { Container } from './styles';

export default function UserStatus() {
	return (
		<Container>
			<div>		
				<strong>500</strong>
				<span>Posts</span>
			</div>
			<div>		
				<strong>500</strong>
				<span>Followers</span>
			</div>
			<div>		
				<strong>500</strong>
				<span>Following</span>
			</div>
		</Container>
	);
}