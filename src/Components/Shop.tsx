import React from "react";
import './Shop.scss'


function Shop() {
    return(
        <div>
            <div className='shop'>
                <h2 className='head'>Shop</h2>
                <div>
                    <p>2x Multiplier</p>
                    <button className='2x'>Buy</button>
                </div>
                <div>
                    <p>4x Multiplier</p>
                    <button className='4x'>Buy</button>
                </div>
                <div>
                    <p>Mr.Zom</p>
                    <button className='zom'>Buy</button>    
                </div>
                <div>
                    <p>Autoclicker</p>
                    <button className='autoclicker'>Buy</button>    
                </div>
                <div>
                    <p>6x Multiplier</p>
                    <button className='6x'>Buy</button>    
                </div>
                <div>
                    <p>10000000x Multiplier</p>
                    <button className='infinite'>Buy</button>    
                </div>
            </div>
        </div>
    )
}

export default Shop