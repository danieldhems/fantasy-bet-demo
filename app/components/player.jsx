import React from 'react';

const Player = ({ name, position, formation_place }) => (
    <div className="player">
        {name}<br />
        {position} <br />
        {formation_place}<br />
    </div>
);

export default Player;