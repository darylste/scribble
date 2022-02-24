import React from 'react';

import logoImg from '../../../assets/logo.svg';

import './Logo.style.scss';

const Logo: React.FC = () => {
	return <img src={logoImg} alt='logo' />;
};

export default Logo;
