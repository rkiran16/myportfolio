import React from 'react';
import { progress, filler } from './progressBar.module.scss';

const progressBar = ({label,progressLevel}) => {
    return(
        <div className={progress}>
            <div className={filler} style={{"width" : `${progressLevel}%` }}>
                <span>{label}</span>
            </div>
            <span>{`${progressLevel}%`}</span>
        </div>
    )
}

export default progressBar;