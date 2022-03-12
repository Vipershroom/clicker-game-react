import React, { useState } from 'react'
import './App.scss'
import './App'
import './Shop.scss'

let clickMod = 1

const twoX = ['25 clicks', '150 clicks']

let shopUpgrades = {
    zom: false,
    zom2: false
}

function App() {

    let [click, setclick] = useState(0)

    let [display, setDisplay] = useState(false)

    let [zom, setZom] = useState(twoX[0])

    // const UpgradeList = () => {
    //     return (
    //         <div>
    //             <ul>
    //                 <li>2x: </li>
    //                 <li></li>
    //                 <li></li>
    //                 <li></li>
    //                 <li></li>
    //                 <li></li>
    //             </ul>
    //         </div>
    //     )
    // }

    return(
        <div>
            <div className="spacing">
            <h1>Welcome to Clicker Game</h1>
                <h3>Clicks: {click}</h3>
                <button className="btn" onClick={() => setclick(click + clickMod)} >Click here!</button>
                <button className="btn" onClick={() => setDisplay(!display)}>Shop</button>
            </div>
            { display?
            <div className='shop'>
                <h2 className='head'>Shop</h2>
                <div>
                    <p>2x Multiplier</p>
                    <p>{zom}</p>
                    <button onClick={() => {
                        if (click >= 25 && shopUpgrades.zom === false) {
                            clickMod *= 2
                            setclick(click -= 25)
                            shopUpgrades.zom = true
                            setZom(zom = twoX[1])
                        } else if (click >= 150 && shopUpgrades.zom2 === false) {
                            clickMod *= 2
                            setclick(click -= 150)
                            shopUpgrades.zom2 = true
                            setZom(zom = "Maxxed!")
                        }
                    }}>Buy</button>
                </div>
                <div>
                    <p>4x Multiplier</p>
                    <p>75 clicks</p>
                    <button className='4x' onClick={() => {
                        if (click >= 75) {
                            clickMod *= 4
                            setclick(click -= 75)
                        }
                    }}>Buy</button>
                </div>
                <div>
                    <p>Mr.Zom</p>
                    <p>50 clicks</p>
                    <button className='zom' onClick={() => {
                        if (click >= 50 && shopUpgrades.zom === false) {
                            setclick(click - 50)
                            setInterval(() => {
                                setclick(click => click + 1)
                            }, 5000)
                            shopUpgrades.zom = true
                        }
                    }}>Buy</button>    
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
            :null}
        </div>
    )
}

export default App