import React from 'react';
import { FaUser, FaFlag } from "react-icons/fa";

const Card = ({ player }) => {

    const { name, country, playerType, rating, batStyle, bowlingStyle, price, img } = player;

    return (
        <div>
            <div className="card bg-base-100 w-full shadow-sm">
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

                        <button className='btn'>{playerType}</button>
                    </div>

                    <div className="divider my-2"></div>

                    <h2 className='font-bold'>{rating}</h2>

                    <div className='flex justify-between font-bold'>
                        <p>{batStyle}</p>
                        <p className='text-right'>{bowlingStyle}</p>
                    </div>

                    <div className="card-actions justify-between items-center">
                        <p className='font-semibold'>Price: {price}</p>
                        <button className="btn btn-primary">Choose Player</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;