import React, { Component, Fragment } from 'react'
import Lottie from 'react-lottie'
import animationData from './webDev.json'
import { lottieWrapper } from './lottie.module.scss'

class UncontrolledLottie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        }
    }

    componentDidMount() {
        this.timerHandle = setTimeout(() => this.setState({ loading: false }), 2500);
    }

    componentWillUnmount(){
        if (this.timerHandle) {
            clearTimeout(this.timerHandle);
            this.timerHandle = 0;
        }
    }

    render(){
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        };

        return(
            <Fragment>
                { this.state.loading && <div className={lottieWrapper}>
                    <Lottie options={defaultOptions}
                            height={400}
                            width={400}
                    />
                </div> }
            </Fragment>
        )
    }
}

export default UncontrolledLottie;