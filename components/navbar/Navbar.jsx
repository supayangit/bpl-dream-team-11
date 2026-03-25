import React from 'react';
import CoinImg from '../../src/assets/DoubleDollar.png'

const Navbar = () => {
    return (
        <div>

            <div className="navbar bg-base-100 shadow-sm container mx-auto">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="flex-none">
                    <button className="flex justify-between gap-2 font-semibold">
                        0 Coin
                        <img src={CoinImg} alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;