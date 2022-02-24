import React from 'react';

import Logo from '../../Atoms/Logo/Logo.component';
import Profile from '../../Atoms/Profile/Profile.component';
import Navigation from '../../Molecules/Navigation/Navigation.component';

import './Header.style.scss';

const Header: React.FC = () => {
	return (
		<header>
			<div className='headerLeft'>
				<Logo />
				<Navigation />
			</div>
			<Profile />
		</header>
	);
};

export default Header;
