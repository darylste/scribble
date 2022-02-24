import { ComponentMeta } from '@storybook/react';
import React from 'react';

import Logo from './Logo.component';

export default {
	title: 'Logo',
	component: Logo,
} as ComponentMeta<typeof Logo>;

export const logo: React.VFC<{}> = () => <Logo>Logo</Logo>;
