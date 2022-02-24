import React from 'react';

import Logo from './Atomic/Atoms/Logo/Logo.component';
import Profile from './Atomic/Atoms/Profile/Profile.component';
import Navigation from './Atomic/Molecules/Navigation/Navigation.component';

function App() {
	return (
		<div className='App'>
			<Logo />
			<Navigation />
			<Profile />
		</div>
	);
}

export default App;
