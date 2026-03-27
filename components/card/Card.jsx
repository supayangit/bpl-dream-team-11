import React, { useState } from 'react';
import { FaUser, FaFlag } from "react-icons/fa";

const Card = ({ player, setCoin, coin, selectedPlayers, setSelectedPlayers }) => {

    const { name, country, playerType, rating, batStyle, bowlingStyle, price, img } = player;
    const [isSelected, setIsSelected] = useState(false);

    const handleChoosePlayer = () => {
        let newCoin = coin - price;
        if (newCoin >= 0) {
            setCoin(coin - price);
        } else{
            alert ("Not enough coin to purchase this player");
            return;
        }
        alert(`${name} is selected`)
        setIsSelected(true);
        setSelectedPlayers([...selectedPlayers, player]);
    }

    return (
        <div>
            <div className="card bg-base-100 w-full shadow-sm p-4">
                <figure className='max-h-75'>
                    <img
                        src={img || "../../src/assets/default-img.jpg"}
                        alt={`${name} image`}
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "../../src/assets/default-img.jpg"
                        }}
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title"><FaUser />{name}</h2>
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-2'>
                            <FaFlag />
                            <p>{country}</p>
                        </div>

                        <div className='p-2 border border-base-300 bg-base-200 rounded-md'>{playerType}</div>
                    </div>

                    <div className="divider my-2"></div>

                    <h2 className='font-bold'>Rating ({rating})</h2>

                    <div className='flex justify-between font-bold'>
                        <p>{batStyle}</p>
                        <p className='text-right'>{bowlingStyle}</p>
                    </div>

                    <div className="card-actions justify-between items-center">
                        <p className='font-semibold'>Price: {price}</p>

                        <button onClick={handleChoosePlayer}
                            disabled={isSelected}
                            className="btn">{isSelected === true ? "Selected" : "Choose Player"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;