import React from 'react';
import CSSModules from 'react-css-modules';
import PitchStyles from '../styles/pitch.css';
import Player from 'components/player';

class Pitch extends React.Component {
	makePlayers(players){
		if (players.length > 1){
			return players.map(player => (
				<Player {...player} key={`player-${player.name}`} />
			));
		} else if (players.length === 1) {
			const player = players[0];
			return <Player {...player} key={`player-${player.name}`} />;
		}
	}
	render() {
		const { children } = this.props;
		let goalkeeper, defenders, midfielders, forwards;
		if(children !== undefined && children.length > 0){
			goalkeeper = children.filter(c => c.type.toLowerCase() === 'goalkeeper');
			defenders = children.filter(c => c.type.toLowerCase() === 'defender');
			midfielders = children.filter(c => c.type.toLowerCase() === 'midfielder');
			forwards = children.filter(c => c.type.toLowerCase() === 'forward');
			return (
				<div styleName="pitch">
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
			);
		}
		return null;
	}

}

export default CSSModules(Pitch, PitchStyles);
