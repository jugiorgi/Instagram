import React from 'react';

import RoundAvatar from '../RoundAvatar';
import UserStatus from '../UserStatus';
import logo from '~/assets/logo/logo.png';
import logoName from '~/assets/logo/logo-name.png';
import settings from '~/assets/logo/settings.png';

import { Container, UserProfile, Content } from './styles';

export default function Sidebar() {
	return (
		<Container>
			<UserProfile>
				<header>
					<img id="logo" src={logo} alt="logo" />
					<img id="logo_name" src={logoName} alt="Instagram" />
				</header>

				<RoundAvatar avatar="https://i.pinimg.com/originals/ee/1a/41/ee1a41a4531ffb58f37b0064457b4e00.png"/>

				<h1>Clarke Griffin</h1>
				<span>@clarkegriff</span>
			</UserProfile>

			<UserStatus />

			<Content>
				<li>
					<img src={settings}/>
					<span>Feed</span>
				</li>
				<li>
					<img src={settings}/>
					<span>Activity</span>
				</li>
				<li>
					<img src={settings}/>
					<span>IGTV</span>
				</li>
				<li>
					<img src={settings}/>
					<span>Reels</span>
				</li>
				<li>
					<img src={settings}/>
					<span>Shop</span>
				</li>
				<li>
					<img src={settings}/>
					<span>Settings</span>
				</li>
			</Content>
		</Container>
	);
}
