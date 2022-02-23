import React from 'react';
import Profile from './Atomic/Atoms/Profile/Profile.component';

import Navigation from './Atomic/Molecules/Navigation/Navigation.component';

function App() {
	return (
		<div className='App'>
			<Navigation />
			<Profile />
		</div>
	);
}

export default App;
