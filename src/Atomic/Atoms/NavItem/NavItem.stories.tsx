import { ComponentMeta } from '@storybook/react';
import React from 'react';

import NavItem from './NavItem.component';

export default {
	title: 'NavItem',
	component: NavItem,
} as ComponentMeta<typeof NavItem>;

export const navItem: React.VFC<{}> = () => <NavItem>NavItem</NavItem>;
