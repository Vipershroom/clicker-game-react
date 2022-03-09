import React from 'react'
import './App.scss'
import './App'
import { useState } from 'react'

let modifier

function App() {

    const [count, setCount] = useState(0)

    return(
        <div>
            <h1>Welcome to my Clicker Game</h1>
            <div className="spacing">
                <h3>Count: {count}</h3>
                <button className="btn" onClick={() => setCount(count + 1)} >Click here!</button>
                <button className="btn">Shop</button>
            </div>
            <div className='shop'>
                <h2 className='head'>Shop</h2>
                <div>
                    2x Multiplier
                </div>
                <div>4x Multiplier</div>
                <div>Mr.Zom</div>
                <div>Autoclicker</div>
                <div>6x Multiplier</div>
                <div>10000000x Multiplier</div>
            </div>
        </div>
    )
}

export default App