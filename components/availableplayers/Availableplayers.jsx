import React from 'react';
import Card from "../card/Card"

const availableplayers = ({ players, setCoin, coin }) => {
    // console.log(players);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>

            {players.map((player) => {
                return (
                  <Card player={player} setCoin={setCoin} coin={coin}></Card>
                )
            })
            }

        </div>
    );
};

export default availableplayers;