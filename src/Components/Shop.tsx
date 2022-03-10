import React, { useState } from "react";
import './Shop.scss'
import {useContext} from 'react'



let countMod = 1

function Shop() {

    const [countMod, setCountMod] = useState(1)

    return(
        <div>
            <div className='shop'>
                <h2 className='head'>Shop</h2>
                <div>
                    <p>2x Multiplier</p>
                    <button onClick={() => {}}>Buy</button>
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
export const ShopContext = React.createContext(countMod)