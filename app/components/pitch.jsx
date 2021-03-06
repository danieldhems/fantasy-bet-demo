import React from 'react';
import CSSModules from 'react-css-modules';
import PitchStyles from '../styles/pitch.css';
import Player from 'components/player';
import { arrayOf, object } from 'prop-types';

class Pitch extends React.Component {
	makePlayers(players){
		return players.map(player => (
			<Player {...player} key={`player-${player.name}`} />
		));
	}
	render() {
		const { children } = this.props;
		let goalkeeper, defenders, midfielders, forwards;

		if(children !== undefined){
			goalkeeper = children.filter(c => c.type.toLowerCase() === 'goalkeeper');
			defenders = children.filter(c => c.type.toLowerCase() === 'defender');
			midfielders = children.filter(c => c.type.toLowerCase() === 'midfielder');
			forwards = children.filter(c => c.type.toLowerCase() === 'forward');
			return (
				<div styleName="pitch">
					{
						children.length > 0 &&
						<div styleName="formation">
							<div styleName="formation-tier">
								{this.makePlayers(goalkeeper)}
							</div>
							<div styleName="formation-tier">
								{this.makePlayers(defenders)}
							</div>
							<div styleName="formation-tier">
								{this.makePlayers(midfielders)}
							</div>
							<div styleName="formation-tier">
								{this.makePlayers(forwards)}
							</div>
						</div>
					}
				</div>
			);
		}

		return null;
	}
}

Pitch.propTypes = {
	children: arrayOf(object).isRequired,
};

export default CSSModules(Pitch, PitchStyles);
