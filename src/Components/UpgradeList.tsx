import React from 'react'
import './Upgrade.scss'

const UpgradeList = (props:any) => {
    return (
        <div className='wrapper'>
            <h3>Upgrades</h3>
            <ul className='upgrade-list'>
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

export default UpgradeList