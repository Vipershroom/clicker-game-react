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
                <div className='item1'>2x Multiplier</div>
                <div className='item2'></div>
                <div className='item3'></div>
                <div className='item4'></div>
                <div className='item5'></div>
                <div className='item6'></div>
            </div>
        </div>
    )
}

export default App