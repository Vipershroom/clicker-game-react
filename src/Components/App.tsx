import React, { useState } from 'react'
import './styles/App.scss'
import './App'
import './styles/Shop.scss'
import UpgradeList from './UpgradeList'
import Header from './Header'

let clickMod = 1

const twoX = ['25 clicks', '150 clicks']

let shopUpgrades = {
    twoX: false,
    twoX2: false,
    fourX: false,
    fourX2: false,
    zom: false,
    autoclicker: false,
    sixX: false,
    sixX2: false,
    eightX: false,
    eightX2: false,
}

let upgradeCount = {
    twoX: 0,
    fourX: 0,
    zom: 0,
    autoclicker: 0,
    sixX: 0,
    eightX: 0,
}



function App() {

    let [click, setclick] = useState(0)

    let [display, setDisplay] = useState(false)

    let [two, setTwo] = useState(twoX[0])

    let [four, setFour] = useState("75 clicks")

    let [zom, setZom] = useState('50 clicks')

    let [autoclick, setAutoClick] = useState('500 clicks')

    let [six, setSix] = useState('800 clicks')

    let [eight, setEight] = useState('1300 clicks')

    return(
        <div>
            <div className="spacing">
                <Header />
                <h3>Clicks: {click}</h3>
                <button className="btn" onClick={() => setclick(click + clickMod)} >Click here!</button>
                <button className="btn" onClick={() => setDisplay(!display)}>Shop</button>
            </div>
            { display?
            <div className='shop'>
                <h2 className='head'>Shop</h2>
                <div>
                    {/* I literally have no clue why these buttons have classnames. 
                    What was I thinking? */}
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
                    <p>{four}</p>
                    <button className='4x' onClick={() => {
                        if (click >= 75 && shopUpgrades.fourX === false) {
                            clickMod *= 4
                            setclick(click - 75)
                            shopUpgrades.fourX = true
                            setFour(four = "300 clicks")
                            upgradeCount.fourX += 1
                        } else if (click >= 300 && shopUpgrades.fourX2 === false) {
                            clickMod *= 4
                            setclick(click - 300)
                            shopUpgrades.fourX2 = true
                            setFour(four = "Maxxed!")
                            upgradeCount.fourX += 1
                        }
                    }}>Buy</button>
                </div>
                <div>
                    <p>Mr.Zom</p>
                    <p>{zom}</p>
                    <button className='zom' onClick={() => {
                        if (click >= 50 && shopUpgrades.zom === false) {
                            setclick(click - 50)
                            setInterval(() => {
                                setclick(click => click + 1)
                            }, 5000)
                            shopUpgrades.zom = true
                            setZom(zom = "Maxxed!")
                            upgradeCount.zom += 1
                        }
                    }}>Buy</button>    
                </div>
                <div>
                    <p>Autoclicker</p>
                    <p>{autoclick}</p>
                    <button className='autoclicker' onClick={() => {
                        if (click >= 500 && shopUpgrades.autoclicker === false) {
                            setclick(click - 500)
                            const curClickMod = () => clickMod
                            setInterval(() => setclick(click => click + curClickMod()), 3000)
                            shopUpgrades.autoclicker = true
                            setAutoClick(autoclick = "Maxxed!")
                            upgradeCount.autoclicker += 1
                        }
                    }}>Buy</button>    
                </div>
                <div>
                    <p>6x Multiplier</p>
                    <p>{six}</p>
                    <button className='6x' onClick={() => {
                        if (click >= 800 && shopUpgrades.sixX === false) {
                            setclick(click - 800)
                            clickMod *= 6
                            shopUpgrades.sixX = true
                            upgradeCount.sixX += 1
                            setSix(six = '1500 clicks')
                        } else if (click >= 1500 && shopUpgrades.sixX2 === false) {
                            setclick(click - 1500)
                            clickMod *= 6
                            shopUpgrades.sixX2 = true
                            upgradeCount.sixX += 1
                            setSix(six = "Maxxed!")
                        }
                    }}>Buy</button>    
                </div>
                <div>
                    <p>8x Multiplier</p>
                    <p>{eight}</p>
                    <button className='eightX' onClick={() => {
                        if (click >= 1300 && shopUpgrades.eightX === false) {
                            setclick(click - 1300)
                            clickMod *= 8
                            shopUpgrades.eightX = true
                            upgradeCount.eightX += 1
                            setEight(eight = "2500 Clicks")
                        } else if (click >= 2500 && shopUpgrades.eightX2 === false) {
                            setclick(click - 2500)
                            clickMod *= 8
                            shopUpgrades.eightX2 = true
                            upgradeCount.eightX += 1
                            setEight( eight = "Maxxed!")
                        }
                    }}>Buy</button>    
                </div>
            </div>
            :null}
            {/* <br /><br /><br />
            <div className='secret-shop'>
                <p>k</p>
            </div> */}
            {display? <UpgradeList x2={upgradeCount.twoX} x4={upgradeCount.fourX} zom={upgradeCount.zom} 
            autoclicker={upgradeCount.autoclicker} x6={upgradeCount.sixX} eightx={upgradeCount.eightX} />:null}
            
        </div>
    )
}

export default App