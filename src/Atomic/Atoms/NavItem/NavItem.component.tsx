import React from 'react';

import './NavItem.style.scss';

const ListItem: React.FC = ({ children }) => {
	return <li className='listItem'>{children}</li>;
};

export default ListItem;
