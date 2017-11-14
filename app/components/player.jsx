import React from 'react';
import CSSModules from 'react-css-modules';
import PlayerStyles from '../styles/player.css';

const Player = ({ name, position, formation_place }) => (
	<div styleName='player'>
		{name}<br />
		{position} <br />
		{formation_place}<br />
	</div>
);

export default CSSModules(Player, PlayerStyles);