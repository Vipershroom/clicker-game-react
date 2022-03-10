import React, { useContext } from 'react'
import './App.scss'
import './App'
import { useState } from 'react'
import { ShopContext } from './Shop'



function App() {

    let countMod = useContext(ShopContext)

    const [count, setCount] = useState(0)

    return(
        <div>
            <h1>Welcome to my Clicker Game</h1>
            <div className="spacing">
                <h3>Count: {count}</h3>
                <button className="btn" onClick={() => setCount(count + countMod)} >Click here!</button>
                <button className="btn">Shop</button>
            </div>
        </div>
    )
}

export default App