import { ComponentMeta } from '@storybook/react';
import React from 'react';

import Header from './Header.component';

export default {
	title: 'Header',
	component: Header,
} as ComponentMeta<typeof Header>;

export const header: React.VFC<{}> = () => <Header>Header</Header>;
