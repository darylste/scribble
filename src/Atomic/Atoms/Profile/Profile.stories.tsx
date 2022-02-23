import { ComponentMeta } from '@storybook/react';
import React from 'react';

import Profile from './Profile.component';

export default {
	title: 'Profile',
	component: Profile,
} as ComponentMeta<typeof Profile>;

export const profile: React.VFC<{}> = () => <Profile>Profile</Profile>;
