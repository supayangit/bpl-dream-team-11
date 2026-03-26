import React, { use, useState } from 'react';
import Availableplayers from '../../availableplayers/Availableplayers';
import Selectedplayers from '../../selectedplayers/Selectedplayers'

const Players = ({ playersPromise, setCoin, coin}) => {
    const players = use(playersPromise);
    const [selectedType, setSelectedType] = useState("available");


    return (
        <div className='container mt-10 mx-auto space-y-4'>

            <div className='flex justify-between gap-4 items-center'>
                {selectedType === "available" ? <h2 className='font-bold text-3xl'>Available Players</h2> : <h2 className='font-bold text-3xl'>Selected Players</h2>}
                <div className='flex gap-4'>
                    <button
                    onClick={()=>setSelectedType("available")}
                     className={`btn ${selectedType === "available" ? "bg-[#E7FE29]" : ""} rounded-r-none`}>Available</button>
                    <button
                    onClick={()=>setSelectedType("selected")}
                    className={`btn ${selectedType === "selected" ? "bg-[#E7FE29]" : ""} btn rounded-l-none`}>Selected</button>
                </div>
            </div>

            {selectedType === "available" ? <Availableplayers players={players} setCoin={setCoin} coin={coin}></Availableplayers> : <Selectedplayers players={players}></Selectedplayers>}
            
        </div>
    );
};

export default Players;