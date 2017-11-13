import React from 'react';
import Player from 'components/player';

class Formation extends React.Component {
	makePlayers(players){
		return players.map(player => (
			<Player {...player} key={`player-${player.name}`} />
		));
	}
	render() {
		const { children } = this.props;
		let goalkeeper, defenders, midfielders, forwards;
		if(children){
			goalkeeper = children.filter(c => c.type.toLowerCase() === 'goalkeeper');
			defenders = children.filter(c => c.type.toLowerCase() === 'defender');
			midfielders = children.filter(c => c.type.toLowerCase() === 'midfielder');
			forwards = children.filter(c => c.type.toLowerCase() === 'forward');
			return (
				<div className="formation">
					<div id="formation-tier-1">
						{this.makePlayers(goalkeeper)}
					</div>
					<div id="formation-tier-2">
						{this.makePlayers(defenders)}
					</div>
					<div id="formation-tier-3">
						{this.makePlayers(midfielders)}
					</div>
					<div id="formation-tier-4">
						{this.makePlayers(forwards)}
					</div>
					<div id="formation-tier-5">
					</div>
				</div>
			);
		}
		return null;
	}

}

export default Formation;
