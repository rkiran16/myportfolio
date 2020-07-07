import React from 'react';
import { heading } from './heading.module.scss';

const Heading = ({headingText}) => {
    return (
        <p className={heading}>
            <span>{headingText}</span>
        </p>
    )
}

export default Heading;