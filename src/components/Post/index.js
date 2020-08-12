import React from 'react';

import RoundAvatar from '../RoundAvatar';
import {  IoMdPaperPlane, IoIosHeartEmpty } from "react-icons/io";
import {  RiChat3Line, RiHeartLine } from "react-icons/ri";


import { Container } from './styles';

export default function Post({ image, avatar, name }) {
	return (
		<Container>
			<img src={image} alt="Post" />

			<div>
				<div className="person">
					<button type="button">
						<RoundAvatar avatar={avatar}/>
					</button>
					<strong>{name}</strong>
				</div>

				<div className="actionButtons">
					<button type="button">
						<RiHeartLine size={25} color="#FFF"/>
					</button>
					<button type="button">
						<RiChat3Line size={25} color="#FFF"/>
					</button>
					<button type="button">
						<IoMdPaperPlane size={25} color="#FFF"/>
					</button>
				</div>
			</div>
		</Container>
	);
}