import React from 'react';
import { MdDelete } from "react-icons/md";
import { FaUser } from "react-icons/fa";

const Selectedcard = ({player, handleDeleteSelectedPlayer}) => {
    return (
        <div>
            <div className='flex items-center gap-6 justify-between p-8 rounded-2xl border'>
                <div className='flex items-center gap-4'>
                    <img className='h-19 w-auto rounded-md'
                        src={player.img || "../../src/assets/default-img.jpg"}
                        alt={`${player.name} image`}
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "../../src/assets/default-img.jpg"
                        }}
                    />
                    <div>
                        <h2 className='flex items-center gap-2.5 font-bold text-3xl'><FaUser /> {player.name}</h2>
                        <p>{player.playerType}</p>
                    </div>
                </div>
                <button className='btn text-red-400' onClick={() => handleDeleteSelectedPlayer(player)}>
                    <MdDelete />
                </button>
            </div>
        </div>
    );
};

export default Selectedcard;