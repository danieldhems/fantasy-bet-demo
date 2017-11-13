import React from 'react';
import { connect } from 'react-redux';
import Pusher from 'react-pusher';

import { Creators } from 'actions/AppActions';
import PusherConfig from './pusher-config';

import Pitch from 'components/pitch';
import Player from 'components/player';

import Subscribe from 'components/Subscribe';

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
        })
    }
    getPlayers(players){
        if(players.length > 0){
            return players.map( player => ( 
                <Player {...player} key={`player-${player.name}`} />
            ))
        }

        return null;
    }
    render() {
        const { players, onReceiveUpdate } = this.props;
        const formation = this.getPlayers(players);
        return (
            <div className="app-container">
            <Pitch>
                {formation}
            </Pitch>
            <Pusher
                channel={PusherConfig.channel}
                event={PusherConfig.event}
                onUpdate={msg => onReceiveUpdate(msg)}
            />
            </div>
        )
    }
};

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
