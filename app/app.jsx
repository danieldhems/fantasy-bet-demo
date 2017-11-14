import React from 'react';
import { connect } from 'react-redux';
import Pusher from 'react-pusher';
import { arrayOf, func, string, number, shape } from 'prop-types';

import { Creators } from 'actions/AppActions';
import PusherConfig from 'app/pusher-config';
import Subscribe from 'components/Subscribe';
import Pitch from 'components/pitch';

class App extends React.Component {
	constructor(props){
		super(props);
	}
	componentDidMount(){
		this.props.fetchInitialDataAttempt();
		/**
		 * Given more time I would have abstracted the following request to a Redux Saga
		 * as this is how I handle network requests as standard in my Redux apps
		 */
		fetch('http://lineups.dev.fantech.io', {mode:'cors'})
			.then( response => response.json())
			.then( response => {
				this.props.fetchInitialDataSuccess(response);
			})
			.catch(e => {
				this.props.fetchInitialDataFailure(e);
			});
	}
	render() {
		const { players, onReceiveUpdate } = this.props;
		return (
			<div className="app-container">
				<Pitch>
					{players}
				</Pitch>
				<Pusher
					channel={PusherConfig.channel}
					event={PusherConfig.event}
					onUpdate={msg => onReceiveUpdate(msg)}
				/>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	players: state.players,
});

const mapDispatchToProps = dispatch => ({
	fetchInitialDataAttempt: () =>
		dispatch(Creators.fetchInitialDataAttempt()),
	fetchInitialDataSuccess: data =>
		dispatch(Creators.fetchInitialDataSuccess(data)),
	fetchInitialDataFailure: data =>
		dispatch(Creators.fetchInitialDataFailure(data)),
	onReceiveUpdate: data =>
		dispatch(Creators.onReceiveUpdate(data))
});

App.propTypes = {
	players: arrayOf(shape({
		name: string.isRequired,
		position: string.isRequired,
		formation_place: number.isRequired,
	})).isRequired,
	fetchInitialDataAttempt: func.isRequired,
	fetchInitialDataSuccess: func.isRequired,
	fetchInitialDataFailure: func.isRequired,
	onReceiveUpdate: func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
