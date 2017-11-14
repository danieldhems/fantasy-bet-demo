import React from 'react';
import { string, number } from 'prop-types';
import CSSModules from 'react-css-modules';
import PlayerStyles from '../styles/player.css';

const Player = ({ name, position, formation_place }) => (
	<div styleName='player'>
		<div styleName="number">{formation_place}</div>
		<div styleName="name">{name}</div>
		<div styleName="position">{position}</div>
	</div>
);

Player.propTypes = {
	name: string.isRequired,
	position: string.isRequired,
	formation_place: number.isRequired,
};

export default CSSModules(Player, PlayerStyles);