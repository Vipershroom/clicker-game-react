import React from 'react'
import './styles/Upgrade.scss'

const UpgradeList = (props:any) => {
    return (
        <div className='wrapper'>
            <h3>Upgrades</h3>
            <ul className='upgrade-list'>
                <li>2x: {props.x2}</li>
                <li>4x: {props.x4}</li>
                <li>Mr.zom: {props.zom}</li>
                <li>Autoclicker: {props.autoclicker}</li>
                <li>6x: {props.x6}</li>
                <li>10000000x: {props.eightx}</li>
            </ul>
        </div>
    )
}

export default UpgradeList