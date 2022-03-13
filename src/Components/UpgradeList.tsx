import React from 'react'
import './styles/Upgrade.scss'

const UpgradeList = (props:any) => {
    return (
        <div className='wrapper'>
            <h3>Upgrades</h3>
            <ul className='upgrade-list'>
                <li>2x: {props.x2}</li>
                <li>4x: {props.x4}</li>
                <li>Mr.zom: {}</li>
                <li>Autoclicker: {}</li>
                <li>6x: {}</li>
                <li>10000000x: {}</li>
            </ul>
        </div>
    )
}

export default UpgradeList