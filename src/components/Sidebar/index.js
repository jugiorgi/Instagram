import React from 'react';

import RoundAvatar from '../RoundAvatar';
import UserStatus from '../UserStatus';
import logo from '~/assets/logo/logo.png';
import logoName from '~/assets/logo/logo-name.png';
import { MdDashboard, MdOndemandVideo } from 'react-icons/md';
import { RiTvLine, RiSettings5Line, RiBook2Line, RiLogoutBoxRLine } from "react-icons/ri";
import { FaShoppingBag } from "react-icons/fa";

import { Container, UserProfile, Content, Icon } from './styles';

export default function Sidebar() {
	return (
		<Container>
			<UserProfile>
				<header>
					<img id="logo" src={logo} alt="logo" />
					<img id="logo_name" src={logoName} alt="Instagram" />
				</header>
				
				<div>
					<RoundAvatar avatar="https://66.media.tumblr.com/dc960340a5c17d5695f7e8b10879911b/tumblr_prj2m2kXwe1szajfa_540.jpg"/>
				</div>
				
				<h1>Eliza Jane Taylor</h1>
				<span>@elizataylor</span>
			</UserProfile>

			<UserStatus />

			<Content>
				<li>
					<button type="button">
						<MdDashboard size={30}  className='icons'/>
					</button>
					<span>Feed</span>
				</li>
				<li>
					<button type="button">
						<RiBook2Line size={30} className='icons'/>
					</button>
					<span>Activity</span>
				</li>
				<li>
					<button type="button">
						<RiTvLine size={30} className='icons'/>
					</button>
					<span>IGTV</span>
				</li>
				<li>
					<button type="button">
						<MdOndemandVideo size={30} className='icons'/>
					</button>
					<span>Reels</span>
				</li>
				<li>
					<button type="button">
						<FaShoppingBag size={30} className='icons'/>
					</button>
					<span>Shop</span>
				</li>
				<li>
					<button type="button">
						<RiSettings5Line size={30} className='icons'/>
					</button>
					<span>Settings</span>
				</li>

				<hr />
				
				<li>
					<button type="button">
						<RiLogoutBoxRLine size={30} color="#FFF"/>
					</button>
					<span>Logout</span>
				</li>
			</Content>
		</Container>
	);
}
