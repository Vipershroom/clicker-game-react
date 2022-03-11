import React, { useContext } from 'react'
import './App.scss'
import './App'
import { useState } from 'react'
import './Shop.scss'

let clickMod = 1

function App() {

    let [click, setclick] = useState(0)

    return(
        <div>
            <h1>Welcome to my Clicker Game</h1>
            <div className="spacing">
                <h3>Clicks: {click}</h3>
                <button className="btn" onClick={() => setclick(click + clickMod)} >Click here!</button>
                <button className="btn">Shop</button>
            </div>
            <div className='shop'>
                <h2 className='head'>Shop</h2>
                <div>
                    <p>2x Multiplier</p>
                    <p>25 clicks</p>
                    <button onClick={() => {
                        if (click >= 25) {
                            clickMod *= 2
                            setclick(click -= 25)
                        }
                    }}>Buy</button>
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

export default App