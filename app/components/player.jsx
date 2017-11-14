import React from 'react';
import CSSModules from 'react-css-modules';
import PlayerStyles from '../styles/player.css';

const Player = ({ name, position, formation_place }) => (
	<div styleName='player'>
		<div styleName="number">{formation_place}</div>
		<div styleName="name">{name}</div>
		<div styleName="formation-place">{}</div>
	</div>
);

export default CSSModules(Player, PlayerStyles);