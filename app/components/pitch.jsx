import React from 'react';
import CSSModules from 'react-css-modules';
import PitchStyles from '../styles/pitch.css';

const Pitch = ({ children }) => (
	<div className="pitch">
		{children}
	</div>
);

export default CSSModules(Pitch, PitchStyles);
