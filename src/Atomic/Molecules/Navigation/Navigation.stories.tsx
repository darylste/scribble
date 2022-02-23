import { ComponentMeta } from '@storybook/react';
import React from 'react';

import Navigation from './Navigation.component';

export default {
	title: 'Navigation',
	component: Navigation,
} as ComponentMeta<typeof Navigation>;

export const navigation: React.VFC<{}> = () => (
	<Navigation>Navigation</Navigation>
);
