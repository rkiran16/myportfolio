import React from 'react';
import { btn } from '../Button/Button.module.scss';

const Anchor = ({href,children}) => {
    return <a className={btn} href={href} target="_blank">{children}</a>
}

export default Anchor;