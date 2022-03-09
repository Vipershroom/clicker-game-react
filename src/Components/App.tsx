import React from 'react'
import './App.scss'
import './App'
import { useState } from 'react'



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
        </div>
    )
}

export default App