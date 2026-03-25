import React, { use } from 'react';
import Availableplayers from '../../availableplayers/Availableplayers';

const Players = ({playersPromise}) => {
    const players = use(playersPromise);

    // console.log(`${players.length} players:`, players)

    return (
        <div className='container mx-auto'>
            <h2 className='font-bold'>Available Players: {players.length}</h2>
            <Availableplayers players={players}></Availableplayers>
        </div>
    );
};

export default Players;