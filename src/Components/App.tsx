import React, { useState } from 'react'
import './App.scss'
import './App'
import './Shop.scss'

let clickMod = 1

const twoX = ['25 clicks', '150 clicks']

let shopUpgrades = {
    twoX: false,
    twoX2: false,
    zom: false
}

let upgradeCount = {
    twoX: 0,
}

function App() {

    let [click, setclick] = useState(0)

    let [display, setDisplay] = useState(false)

    let [two, setTwo] = useState(twoX[0])

    const UpgradeList = (props:any) => {
        return (
            <div>
                <ul>
                    <li>2x: {props.name}</li>
                    <li>4x: {}</li>
                    <li>Mr.zom: {}</li>
                    <li>Autoclicker: {}</li>
                    <li>6x: {}</li>
                    <li>10000000x: {}</li>
                </ul>
            </div>
        )
    }

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
                    <p>{two}</p>
                    <button onClick={() => {
                        if (click >= 25 && shopUpgrades.twoX === false) {
                            clickMod *= 2
                            setclick(click -= 25)
                            shopUpgrades.twoX = true
                            setTwo(two = twoX[1])
                            upgradeCount.twoX += 1
                        } else if (click >= 150 && shopUpgrades.twoX2 === false) {
                            clickMod *= 2
                            setclick(click -= 150)
                            shopUpgrades.twoX2 = true
                            setTwo(two = "Maxxed!")
                            upgradeCount.twoX += 1
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
                    <p>200 clicks</p>
                    <button className='autoclicker'>Buy</button>    
                </div>
                <div>
                    <p>6x Multiplier</p>
                    <p>500 clicks</p>
                    <button className='6x'>Buy</button>    
                </div>
                <div>
                    <p>10000000x Multiplier</p>
                    <p>100000000 clicks</p>
                    <button className='infinite'>Buy</button>    
                </div>
            </div>
            :null}
            <UpgradeList name={upgradeCount.twoX} />
        </div>
    )
}

export default App