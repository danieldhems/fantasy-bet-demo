import React from 'react';
import { connect } from 'react-redux';
import Pusher from 'react-pusher';

import PusherConfig from './pusher-config';
import Subscribe from 'components/Subscribe';

import { Creators } from 'actions/AppActions';

import Pitch from 'components/pitch';
import Formation from 'components/formation';

class App extends React.Component {
	constructor(props){
		super(props);
	}
	componentDidMount(){
		this.props.fetchInitialDataAttempt();
		fetch('http://lineups.dev.fantech.io')
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
					<Formation>
						{players}
					</Formation>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
