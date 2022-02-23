import React from 'react';

import NavItem from '../../Atoms/NavItem/NavItem.component';

import './Navigation.style.scss';

const Navigation: React.FC = () => {
	return (
		<ul className='nav'>
			<NavItem>HOME</NavItem>
			<NavItem>FOLLOWING</NavItem>
			<NavItem>MY POSTS</NavItem>
		</ul>
	);
};

export default Navigation;
