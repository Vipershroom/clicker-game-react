import React from "react";
import './Shop.scss'


function Shop() {
    return(
        <div>
            <div className='shop'>
                <h2 className='head'>Shop</h2>
                <div>
                    <p>2x Multiplier</p>
                    <button className='buy-btn'>Buy</button>
                </div>
                <div>
                    <p>4x Multiplier</p>
                    <button className='buy-btn'>Buy</button>
                </div>
                <div>
                    <p>Mr.Zom</p>
                    <button className='buy-btn'>Buy</button>    
                </div>
                <div>
                    <p>Autoclicker</p>
                    <button className='buy-btn'>Buy</button>    
                </div>
                <div>
                    <p>6x Multiplier</p>
                    <button className='buy-btn'>Buy</button>    
                </div>
                <div>
                    <p>10000000x Multiplier</p>
                    <button className='buy-btn'>Buy</button>    
                </div>
            </div>
        </div>
    )
}

export default Shop