import React from 'react';
import Card from "../card/Card"

const availableplayers = ({ players, setCoin, coin, selectedPlayers, setSelectedPlayers}) => {
    // console.log(players);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>

            {players.map((player) => {
                return (
                  <Card key={player.name} player={player} setCoin={setCoin} coin={coin} setSelectedPlayers={setSelectedPlayers} selectedPlayers={selectedPlayers}>

                  </Card>
                )
            })
            }

        </div>
    );
};

export default availableplayers;