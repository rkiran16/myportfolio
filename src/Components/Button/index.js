import React from 'react';
import { btn } from './Button.module.scss';
const Button = ({onPress,label}) => {
    return <button className={btn} onClick={onPress}>{label}</button>;
};
export default Button;