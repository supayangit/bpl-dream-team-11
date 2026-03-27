import React from 'react';
import Selectedcard from '../card/Selectedcard';

const selectedplayers = ({ selectedPlayers, setSelectedPlayers, coin, setCoin }) => {
    console.log(selectedPlayers);

    const handleDeleteSelectedPlayer = (player) => {
        console.log("clicked")
        const filteredPlayers = selectedPlayers.filter(selectedPlayer => selectedPlayer.name != player.name);
        console.log(filteredPlayers);
        setSelectedPlayers(filteredPlayers);
        setCoin(coin + player.price);
    };

    return (
        <div>
            <div className='space-y-4'>
                {selectedPlayers.length === 0 ?
                <div className='h-100 flex items-center justify-center flex-col gap-6'>
                    <h2 className='font-semibold text-3xl'>No players selected yet</h2>
                    <p>Go to available players tab to select players</p>
                </div>
             
             : selectedPlayers.map((player, ind) => {
                    return (
                       <Selectedcard key={ind} player={player} handleDeleteSelectedPlayer={handleDeleteSelectedPlayer}></Selectedcard>
                    )
                })
                }
            </div>

        </div>
    );
};

export default selectedplayers;