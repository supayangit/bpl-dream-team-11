import React from 'react';
import Card from "../card/Card"

const availableplayers = ({ players }) => {
    console.log(players);
    return (
        <div className='grid grid-cols-3 gap-6'>

            {players.map((player) => {
                return (
                  <Card player={player}></Card>
                )
            })
            }

        </div>
    );
};

export default availableplayers;